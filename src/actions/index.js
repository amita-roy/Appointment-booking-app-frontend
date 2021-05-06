import { registerUser, loginUser } from 'api/userApi';
import fetchServices from 'api/serviceApi';
import { newAppointment, fetchAllAppointments } from 'api/appointmentApi';
import ACTIONS from './actionTypes';

export const signup = (formProps, callback) => async (dispatch) => {
  const { success, user, err } = await registerUser(formProps);

  if (err) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: err });
  } else {
    dispatch({ type: ACTIONS.AUTH_USER, payload: success, user });
    localStorage.setItem('token', success);
    localStorage.setItem('user', JSON.stringify(user));
    callback();
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  const { success, user, err } = await loginUser(formProps);

  if (err) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: err });
  } else {
    dispatch({ type: ACTIONS.AUTH_USER, payload: success, user });
    localStorage.setItem('token', success);
    localStorage.setItem('user', JSON.stringify(user));
    callback();
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: ACTIONS.LOGOUT_USER,
  };
};

export const fetchAllServices = () => async (dispatch) => {
  const { success, err } = await fetchServices();

  if (err) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: err });
  } else {
    dispatch({ type: ACTIONS.FETCH_SERVICES, payload: success.data });
  }
};

export const createAppointment = (appointment, redirect) => async (dispatch) => {
  const { err } = await newAppointment(appointment);
  if (err) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: err });
  } else {
    dispatch({ type: ACTIONS.CREATE_APPOINTMENT });
    redirect();
  }
};
export const fetchAppointments = () => async (dispatch) => {
  const { success, err } = await fetchAllAppointments();

  if (err) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: err });
  } else {
    dispatch({ type: ACTIONS.FETCH_APPOINTMENTS, payload: success.data });
  }
};

export const selectedService = (service, redirect) => {
  redirect();
  return {
    type: ACTIONS.SELECTED_SERVICE,
    payload: service,
  };
};

export const resetError = () => ({ type: ACTIONS.RESET_ERROR });
