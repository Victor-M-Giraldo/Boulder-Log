import { Climb } from '../types/climb';
import ClimbCard from './ClimbCard';
import Modal from './Modal';
import { useState } from 'react';
import NewNoteForm from './NewNoteForm';
import { CreateNote } from '../services/NoteService';

interface ClimbsProps {
  climbs: Climb[];
}
export default function Climbs({ climbs }: ClimbsProps) {
  const [selectedClimbID, setSelectedClimbID] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const noteContent = formData.get('note') as string;
    await CreateNote(noteContent, selectedClimbID);
    form.reset();
    setModalVisible(false);
  }

  function handleClick(climbID: number) {
    setSelectedClimbID(climbID);
    setModalVisible(true);
  }

  return (
    <>
      <Modal open={modalVisible} onCancel={() => setModalVisible(false)}>
        <NewNoteForm onSubmit={handleSubmit} />
      </Modal>
      <div className='space-y-4'>
        {climbs.map((climb) => (
          <ClimbCard key={climb.id} climb={climb} onAddNote={handleClick} />
        ))}
      </div>
    </>
  );
}
