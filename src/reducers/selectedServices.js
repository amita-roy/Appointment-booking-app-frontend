import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = [];

const selectedServices = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SERVICE_SELECTED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default selectedServices;
