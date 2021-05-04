import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = { services: [], errors: [] };

const services = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SERVICES:
      return { ...state, services: action.payload };
    case ACTIONS.ERR:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

export default services;
