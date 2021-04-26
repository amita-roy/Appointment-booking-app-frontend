import { registerUser, loginUser } from 'api/userApi';
import ACTIONS from './actionTypes';

export const signup = (formProps, callback) => async (dispatch) => {
  const { success, user, err } = await registerUser(formProps);

  if (err) {
    dispatch({ type: ACTIONS.AUTH_ERR, payload: err });
  } else {
    dispatch({ type: ACTIONS.AUTH_USER, payload: success, user });
    localStorage.setItem('token', success);
    localStorage.setItem('user', user);
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
    localStorage.setItem('user', user);
    callback();
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: ACTIONS.AUTH_USER,
    payload: '',
    user: {},
  };
};
