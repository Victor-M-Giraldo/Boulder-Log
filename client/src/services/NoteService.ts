import { getItem } from '../utils/localStorage';
import { Token } from '../types/api';
import { ApiClient } from '../utils/ApiClient';

export async function CreateNote(content: string, climbID: number) {
  const tokenData = getItem<Token>('token');
  if (!tokenData || !tokenData.token) {
    return;
  }
  const { token } = tokenData;
  const response = await ApiClient(
    `climbs/${climbID}/notes`,
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
    { content: content }
  );
  const data = await response.json();
  return data;
}
