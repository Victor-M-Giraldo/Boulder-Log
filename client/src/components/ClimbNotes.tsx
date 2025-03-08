import Note from "./Note";
import { Note as NoteType } from "../types/note";

interface ClimbNotesProps {
    notes: NoteType[];
}

export default function ClimbNotes({ notes }: ClimbNotesProps) {
  if (!notes) {
    return null;
  }
  return (
    <div className='mt-2 space-y-2'>
      <ul
        className='list-disc list-inside
'>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </ul>
    </div>
  );
}
