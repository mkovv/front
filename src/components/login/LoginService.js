import { post } from '../../services/httpService';

const getToken = async (data) => post('/auth/login', data);

export {
    getToken
}