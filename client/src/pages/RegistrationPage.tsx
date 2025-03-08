import AsideImage from '../components/AsideImage';
import RegistrationForm from '../components/RegistrationForm';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';

export default function RegistrationPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      navigate('/climbs');
    }
  }, [user, navigate]);
  return (
    <>
      {!user && (
        <section className='h-full flex items-center justify-center p-6'>
          <div className='bg-base-100 rounded-lg shadow-md grid md:grid-cols-2 w-full max-w-4xl'>
            <AsideImage />
            <RegistrationForm />
          </div>
        </section>
      )}
    </>
  );
}
