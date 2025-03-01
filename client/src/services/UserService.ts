import { ApiClient } from '../utils/ApiClient';
import { LoginResponse} from "../types/api.ts";
import { handleErrors } from '../utils/errorHandler.ts';

export async function authenticate(email: string, password: string): Promise<LoginResponse> {
  const response = await ApiClient(
    'login',
    { method: 'POST' },
    { email, password }
  );

  if (!response.ok) {
    throw await handleErrors(response);
  }

  return await response.json();
}

export async function register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<LoginResponse> {
  const response = await ApiClient(
    '/register',
    { method: 'POST' },
    { firstName, lastName, email, password, confirmPassword }
  )

  if (!response.ok) {
    throw await handleErrors(response);
  }

  return await response.json();
}
