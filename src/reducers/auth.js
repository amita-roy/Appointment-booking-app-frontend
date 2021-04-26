import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = {
  authenticated: '',
  errors: [],
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case ACTIONS.AUTH_ERR:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

export default auth;
