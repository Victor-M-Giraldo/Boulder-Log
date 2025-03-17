import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import NewClimbForm from '../components/NewClimbForm';
import InfoCard from '../components/InfoCard';
import ClimbFilters from '../components/ClimbFilters';
import Button from '../components/Button';
import Climbs from '../components/Climbs';
import { Climb } from '../types/climb';
import { CreateClimb, GetClimbs } from '../services/ClimbService';
import { useNavigate } from 'react-router';
import useUser from '../hooks/useUser';

export default function ViewClimbsPage() {
  const [climbs, setClimbs] = useState<Climb[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  async function fetchClimbs() {
    const { climbs } = await GetClimbs();
    setClimbs(climbs);
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    fetchClimbs();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    await CreateClimb(formData);
    form.reset();
    setModalVisible(false);
    fetchClimbs();
  }

  return (
    <>
      {user && (
        <section className='p-6 bg-base-200 h-full max-w-7xl mx-auto'>
          <Modal open={modalVisible} onCancel={() => setModalVisible(false)}>
            <NewClimbForm onSubmit={handleSubmit} />
          </Modal>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold'>Your Climbs</h1>
            <p>You’ve logged {climbs.length} climbs – keep crushing it!</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            <InfoCard title='Total Climbs' value={climbs.length} />
            <InfoCard title='Highest Grade' value='V6' />
            <InfoCard title='Most Frequent Location' value='Local Gym' />
            <InfoCard title='Last Climb' value='3 days ago' />
          </div>

          <ClimbFilters />

          <Climbs climbs={climbs} setClimbs={setClimbs} />

          <div className='mt-8'>
            <Button
              type='button'
              width='auto'
              onClick={() => setModalVisible(true)}>
              Log a New Climb
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
