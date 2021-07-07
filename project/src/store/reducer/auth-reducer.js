import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../components/utils/constants.js';

const initState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export default authReducer;
