import { combineReducers } from 'redux';


import employees from './authReducer';
import items from './stockReducer'

export const reducers = combineReducers({ employees, items });