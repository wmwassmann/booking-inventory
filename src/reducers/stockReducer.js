import { FETCH_STOCK } from '../constants/actionTypes';

export default (items = [], action) => {
  switch (action.type) { 
    case FETCH_STOCK:      
      return action.payload;
    default:
      return items;
  }
};
