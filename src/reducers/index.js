import { combineReducers } from 'redux';
import auth from './auth';
import allServices from './servicesReducer';
import appointments from './appointments';

export default combineReducers({
  auth,
  allServices,
  allAppointments: appointments,
});
