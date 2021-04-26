import { combineReducers } from 'redux';
import auth from './auth';
import allServices from './servicesReducer';

export default combineReducers({
  auth,
  allServices,
});
