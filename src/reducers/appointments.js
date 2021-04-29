import ACTIONS from '../actions/actionTypes';

const INITIAL_STATE = {};

const appointments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_APPOINTMENTS:
      return { ...state, appointments: action.payload.data, included: action.payload.included };
    case ACTIONS.CREATE_APPOINTMENT:
      return { ...state, appointments: [...state.appointments, action.payload] };
    default:
      return state;
  }
};

export default appointments;
