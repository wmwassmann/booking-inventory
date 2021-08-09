import { AUTH, FETCH_STOCK, FETCH_EMPLOYEE, ADD_STOCK, EDIT_STOCK }  from '../constants/actionTypes'
import * as api from '../api/Axios.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
        // login the user

        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })
        // This redirects to the page you would like your employee to go to.
        // You can change the router.push() to utilize any endpoint
        router.push('/inventory')
    } catch (error) {
      // If this fails it means that 
        // console.log(error, 'Authentication access failure - Debug by inspecting /api/Axios.js, or exported const signin /components/Auth/Auth.js')
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
 
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })

        router.push('/inventory')
    } catch (error) {
        // console.log(error, 'Authentication signup access failure - Debug by inspecting /api/Axios.js, or exported const signup /components/Auth/Auth.j')
    }
}

export const employee = () => async (dispatch) => {
    try {
    

      const { data } = await api.getEmployee();
  
      dispatch({ type: FETCH_EMPLOYEE, payload: data });
   
      // console.log('/actions/auth.js const employee success')
    } catch (error) {
      // console.log(error, "/actions/auth.js const employee failure");
    }
  };

export const items = () => async (dispatch) => {
    try {
    

      const { data } = await api.getStock();
  
      dispatch({ type: FETCH_STOCK, payload: data });
   
      // console.log('/actions/auth.js const stock success')
    } catch (error) {
      // console.log(error, "/actions/auth.js const stock failure");
    }
  };

  export const addItem = (formData) => async (dispatch) => {
    try {

      const { data } = await api.addItem(formData);

      dispatch({ type: ADD_STOCK, payload: data });

      // console.log('/actions/auth.js const stock success')
    } catch (error) {
      // console.log(error, "/actions/auth.js const stock failure");
    }
  }

  export const editItem = (id, item) => async (dispatch) => {
    try {

      const { data } = await api.editItem(id, item);

      dispatch({ type: EDIT_STOCK, payload: data });

      // console.log('/actions/auth.js const stock success')
    } catch (error) {
      // console.log(error, "/actions/auth.js const stock failure");
    }
  }