import { registerUser, loginUser } from 'api/userApi';
import fetchServices from 'api/serviceApi';
import ACTIONS from './actionTypes';

export const signup = (formProps, callback) => async (dispatch) => {
  const { success, user, err } = await registerUser(formProps);

  if (err) {
    dispatch({ type: ACTIONS.AUTH_ERR, payload: err });
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
    dispatch({ type: ACTIONS.AUTH_ERR, payload: err });
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
    type: ACTIONS.AUTH_USER,
    payload: '',
    user: null,
  };
};

export const fetchAllServices = () => async (dispatch) => {
  const { success, err } = await fetchServices();

  if (err) {
    dispatch({ type: ACTIONS.SERVICE_ERR, payload: err });
  } else {
    dispatch({ type: ACTIONS.FETCH_SERVICES, payload: success });
  }
};
