import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = {
  authenticated: '',
  user: {},
  errors: null,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_USER:
      return { ...state, authenticated: action.payload, user: action.user };
    case ACTIONS.AUTH_ERR:
      return { ...state, errors: action.payload };
    case ACTIONS.RESET_STORE:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default auth;
