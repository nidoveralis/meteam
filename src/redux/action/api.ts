import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.mee.team',
});

export default api;