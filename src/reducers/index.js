import { combineReducers } from 'redux';


import employees from './authReducer';
import items from './stockReducer';
import employee from './employeeReducer';

export const reducers = combineReducers({ employees, employee, items });