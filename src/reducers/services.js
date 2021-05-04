import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = { items: [], selected: null };

const services = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SERVICES:
      return { ...state, items: action.payload };
    case ACTIONS.SELECTED_SERVICE:
      return { ...state, selected: action.payload };
    case ACTIONS.CREATE_APPOINTMENT:
      return { ...state, selected: null };
    default:
      return state;
  }
};

export default services;
