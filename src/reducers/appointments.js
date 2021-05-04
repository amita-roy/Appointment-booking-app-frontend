import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = [];

const appointments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_APPOINTMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default appointments;
