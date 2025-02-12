export default function RegistrationPage() {
  return (
    <section className='h-full flex items-center justify-center p-6'>
      <div className='bg-base-100 rounded-lg shadow-md grid sm:grid-cols-2 w-full max-w-4xl'>
        <div className='hidden w-full sm:block bg-cover bg-center bg-[url(/chalk-bag.jpg)] rounded-tl-lg rounded-bl-lg'>
          <div className='h-full p-8 flex items-center justify-center'>
            <h2 className='text-3xl font-bold text-center'>
              Join the Climbing Community
            </h2>
          </div>
        </div>
        <div className='w-full p-8'>
          <h1 className='text-2xl font-bold mb-6'>Create Your Account</h1>
          <form className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email
              </label>
              <input
                type='text'
                id='email'
                placeholder='Type here'
                className='input w-full mt-1'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium'>
                Password
              </label>
              <input
                type='password'
                id='password'
                placeholder='Type here'
                className='input w-full mt-1'
              />
            </div>
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Type here'
                className='input w-full mt-1'
              />
            </div>
            <div>
              <button type='submit' className='w-full btn btn-primary'>
                Sign Up
              </button>
            </div>
          </form>
          <div className='mt-6 text-center'>
            <p className='text-sm'>
              Already have an account?{' '}
              <a href='/login' className='link'>
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
