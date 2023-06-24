import { get } from '../../../services/httpService';

const getPlants = async () => get('/plants');

export {
    getPlants
}