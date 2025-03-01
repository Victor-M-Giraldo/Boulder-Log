import { useState } from 'react';
import useUser from '../hooks/useUser';
import UserService from '../services/UserService';
import { setItem } from '../utils/localStorage';

export function useLogin() {
  const { setUser } = useUser();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const userService = new UserService();

  async function login(formData: Record<string, string>): Promise<boolean> {
    setLoading(true);
    setErrors({});
    const { email, password } = formData;

    try {
      const { token, expiresIn, user } = await userService.authenticate(
        email,
        password
      );
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

  return { login, errors, loading };
}
