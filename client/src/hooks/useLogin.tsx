import { useState } from 'react';
import useUser from '../hooks/useUser';
import { authenticate } from '../services/UserService';
import { setItem } from '../utils/localStorage';

export function useLogin() {
  const { setUser } = useUser();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function handleLogin(formData: Record<string, string>): Promise<boolean> {
    setLoading(true);
    setErrors({});
    const { email, password } = formData;

    try {
      const { token, expiresIn, user } = await authenticate(email, password);
      setUser(user);
      setItem('token', { token, expiresIn });
      return true;
    } catch (error) {
      setErrors(error as Record<string, string>);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { handleLogin, errors, loading };
}
