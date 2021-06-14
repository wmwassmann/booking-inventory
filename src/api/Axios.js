import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('currentEmployee')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('currentEmployee')).token}`

    }
    return req;
})




export const getStock = () => API.get('/inventory/stock');


export const signUp = (formData) => API.post('/users/signup', formData);

export const signIn = (formData) => API.post('/users/signin', formData);

