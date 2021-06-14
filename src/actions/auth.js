import { AUTH, FETCH_STOCK }  from '../constants/actionTypes'
import * as api from '../api/Axios.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
        // login the user

        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })

        router.push('/inventory/employee/signin')
    } catch (error) {
      // If this fails it means that 
        console.log(error, 'Authentication access failure - Debug by inspecting /api/Axios.js, or exported const signin /components/Auth/Auth.js')
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {

        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })

        router.push('/inventory/employee/signup')
    } catch (error) {
        console.log(error, 'this')
    }
}

export const items = () => async (dispatch) => {
    try {
    

      const { data } = await api.getStock();
  
      dispatch({ type: FETCH_STOCK, payload: data });
   
      console.log('/actions/auth.js const stock success')
    } catch (error) {
      console.log(error, "/actions/auth.js const stock failure");
    }
  };