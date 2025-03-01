import { useState } from 'react';
import useUser from './useUser';
import { setItem } from '../utils/localStorage';
import UserService from '../services/UserService';

export function useRegister() {
  const { setUser } = useUser();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function register(formData: Record<string, string>): Promise<boolean> {
    setLoading(true);
    setErrors({});
    const userService = new UserService();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    try {
      const {token, expiresIn, user} = await userService.register(
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      );

      setUser(user);
      setItem('token', { token, expiresIn });
      return true;
    } catch (e) {
      setErrors(e as Record<string, string>);
      return false;
    } finally {
        setLoading(false);
    }
  }
  return { register, errors, loading };
}
