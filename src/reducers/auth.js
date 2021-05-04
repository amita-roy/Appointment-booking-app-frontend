import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = {
  token: '',
  user: {},
  errors: null,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_USER:
      return { ...state, token: action.payload, user: action.user };
    case ACTIONS.ERR:
      return { ...state, errors: action.payload };
    case ACTIONS.RESET:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default auth;
