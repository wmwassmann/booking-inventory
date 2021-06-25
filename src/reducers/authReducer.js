



import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    //  Authorizes the user to log into the account
    case actionType.AUTH:
      localStorage.setItem('currentEmployee', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };

    //   clears the user - ie - logs the user out 
    case actionType.LOGOUT:
        // Clears out the local storage on logout
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;