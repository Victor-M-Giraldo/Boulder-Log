import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ValidationError } from '../errors/ValidationError';
import { ValidationErrorField } from '../types/errors';
import useUser from '../hooks/useUser';
import { authenticate } from '../services/UserService';
import { setItem } from '../utils/localStorage';

export function useLogin() {
  const { setUser } = useUser();
  const [errors, setErrors] = useState<ValidationErrorField[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(formData: Record<string, string>) {
    setLoading(true);
    setErrors([]);
    const { email, password } = formData;

    try {
      const { token, expiresIn, user } = await authenticate(email, password);
      setUser(user);
      setItem('token', { token, expiresIn });
      navigate('/climbs')
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors(error.errors);
        return;
      }
      console.log(error);
      // setErrors(error as Record<string, string>);
    } finally {
      setLoading(false);
    }
  }

  return { handleLogin, errors, loading };
}
