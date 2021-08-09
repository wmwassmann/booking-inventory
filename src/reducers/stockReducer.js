import { FETCH_STOCK, EDIT_STOCK } from '../constants/actionTypes';

export default function variable(items = [], action) {
  switch (action.type) { 
    case FETCH_STOCK:      
      return action.payload;    
    case EDIT_STOCK:
      return items.map((item) => (item._id === action.payload._id ? action.payload : item))      
    default:
      return items;
  }
};
