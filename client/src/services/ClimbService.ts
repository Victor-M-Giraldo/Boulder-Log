    import { getItem } from '../utils/localStorage';
    import { Token } from '../types/api';
    import { ApiClient } from '../utils/ApiClient';

    export async function CreateClimb(formData: FormData) {
        const tokenData = getItem<Token>('token');
        if (!tokenData || !tokenData.token) {
            return;
        }
        const { token } = tokenData;
        return ApiClient('climbs', {
            headers: {
                Authorization: token,
            },
            method: 'POST',
        }, formData);
    }
