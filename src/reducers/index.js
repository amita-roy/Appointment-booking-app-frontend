import { combineReducers } from 'redux';
import auth from './auth';
import appointments from './appointments';
import errors from './errors';
import services from './services';

export default combineReducers({
  auth,
  services,
  allAppointments: appointments,
  errors,
});
