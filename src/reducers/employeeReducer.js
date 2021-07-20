import { FETCH_EMPLOYEE } from '../constants/actionTypes';

export default (employee = [], action) => {
  switch (action.type) { 
    case FETCH_EMPLOYEE:      
      return action.payload;
    default:
      return employee;
  }
};
