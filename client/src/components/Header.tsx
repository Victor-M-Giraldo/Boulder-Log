import { Link } from 'react-router';
import useUser from '../hooks/useUser';

export default function Header() {
  const { user } = useUser();
  return (
    <>
      <header className='p-4 bg-base-100'>
        <div className='max-w-7xl flex m-auto'>
          <h1 className='text-3xl'>
            <Link to='/'>Boulder Log</Link>
          </h1>
          <nav className='ml-auto flex items-center'>
            <ul className='flex gap-2'>
              {user && (
                <Link to='/climbs' className='hover:link'>
                  <li>View Climbs</li>
                </Link>
              )}
              {!user && (
                <>
                  <Link to='/login' className='hover:link'>
                    <li>Log In</li>
                  </Link>
                  <Link to='/register' className='hover:link'>
                    <li>Register</li>
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
