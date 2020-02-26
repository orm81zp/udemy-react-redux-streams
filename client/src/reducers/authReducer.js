import { ACTIONS } from '../actions';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN:
      return { ...state, isSignedIn: true};
    case ACTIONS.SIGN_OUT:
      return { ...state, isSignedIn: false};
    default:
      return state;
  }
};
