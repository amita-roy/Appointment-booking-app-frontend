import { combineReducers } from 'redux';
import auth from './auth';
import allServices from './servicesReducer';
import selectedServices from './selectedServices';
import appointments from './appointments';

export default combineReducers({
  auth,
  allServices,
  selectedServices,
  allAppointments: appointments,
});
