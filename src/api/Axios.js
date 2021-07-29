import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('currentEmployee')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('currentEmployee')).token}`

    }
    return req;
})




export const getStock = () => API.get('/inventory/stock');
export const getEmployee = () => API.get('/employee');

export const addItem = (formData) => API.post('/inventory/stock/add', formData);
export const editItem = (formData) => API.put('/inventory/stock/add', formData);


export const signUp = (formData) => API.post('/employee/signup', formData);

export const signIn = (formData) => API.post('/employee/signin', formData);

