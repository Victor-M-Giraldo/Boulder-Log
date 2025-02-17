import InputField from './InputField';
import Form from './Form';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function LogInForm() {
  const { login, error: serverError, loading } = useLogin();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setValidationErrors({ email: '', password: '' });

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (emailValidation.email || passwordValidation.password) {
      setValidationErrors({
        ...emailValidation,
        ...passwordValidation,
      });
      return;
    }

    login(email, password);
  }

  function validateEmail(email: string) {
    email = email.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = '';
    if (!email) {
      error = 'Email is required';
    } else if (!re.test(email)) {
      error = 'Email is invalid';
    }
    return { email: error };
  }

  function validatePassword(password: string) {
    let error = '';
    if (!password) {
      error = 'Password is required';
    } else if (password.length < 6) {
      error = 'Password must be at least 6 characters';
    }
    return { password: error };
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-6'>Log In</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <InputField
            type='email'
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            label='Email'
            placeholder='Enter your email'
            error={validationErrors.email || serverError?.email}
            onBlur={(e) => {
              setValidationErrors({
                ...validationErrors,
                ...validateEmail(e.target.value),
              });
            }}
          />
        </div>

        <div>
          <InputField
            type='password'
            value={password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            label='Password'
            placeholder='Enter your password'
            error={validationErrors.password || serverError?.password}
            onBlur={(e) => {
              setValidationErrors({
                ...validationErrors,
                ...validatePassword(e.target.value),
              });
            }}
          />
        </div>

        {serverError?.general && (
          <div className='text-red-400 text-sm mb-4'>{serverError.general}</div>
        )}
        <div>
          <button
            type='submit'
            className='btn btn-primary w-full'
            disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </Form>
      <div className='mt-6 text-center'>
        <p className='text-sm'>
          Don't have an account?{' '}
          <a href='/register' className='text-blue-500 hover:text-blue-600'>
            Sign up here
          </a>
        </p>
      </div>
    </>
  );
}
