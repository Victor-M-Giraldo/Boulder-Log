import { getItem } from '../utils/localStorage';
import { Token } from '../types/api';
import  ApiClient  from '../utils/ApiClient';

export async function CreateClimb(formData: FormData) {
  const tokenData = getItem<Token>('token');
  if (!tokenData || !tokenData.token) {
    return;
  }
  const { token } = tokenData;
  return ApiClient.post(
    'climbs',
    formData,
    {
      headers: {
        Authorization: token,
      },
    },
  );
}
export async function GetClimbs() {
  const tokenData = getItem<Token>('token');
  if (!tokenData || !tokenData.token) {
    return;
  }
  const { token } = tokenData;
  const data = await ApiClient.get('climbs', {
    headers: {
      Authorization: token,
    },
  });
  return data;
}
