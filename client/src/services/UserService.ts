import ApiClient from '../utils/ApiClient';
import { LoginResponse, RegisterResponse } from '../types/api.ts';

export async function authenticate(
  email: string,
  password: string
): Promise<LoginResponse> {
  const data = await ApiClient.post<LoginResponse>(
    'login',
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
}

export async function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<RegisterResponse> {
  const data = await ApiClient.post<RegisterResponse>(
    'register',
    { firstName, lastName, email, password, confirmPassword },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );
  return data;
}
