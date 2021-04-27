import { combineReducers } from 'redux';
import auth from './auth';
import allServices from './servicesReducer';
import selectedServices from './selectedServices';

export default combineReducers({
  auth,
  allServices,
  selectedServices,
});
