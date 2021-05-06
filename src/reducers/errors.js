import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = [];

const errors = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return action.payload;
    case ACTIONS.AUTH_USER:
    case ACTIONS.RESET_ERROR:
    case ACTIONS.CREATE_APPOINTMENT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default errors;
