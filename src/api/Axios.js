import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`

    }
    return req;
})




export const getDialog = () => API.get('/dialogs');
export const getNarration = () => API.get('/narration');

export const updateCharacter = (id, updatedCharacter) => API.patch(`/edit/${id}`, updatedCharacter);

export const deleteCharacter = (id) => API.delete(`/edit/${id}`);

// Export SUCCESS

export const signUp = (formData) => API.post('/users/signup', formData);

export const signIn = (formData) => API.post('/users/signin', formData);

