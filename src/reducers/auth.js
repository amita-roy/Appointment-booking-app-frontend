import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = {
  token: '',
  user: null,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_USER:
      return { ...state, token: action.payload, user: action.user };
    case ACTIONS.LOGOUT_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default auth;
