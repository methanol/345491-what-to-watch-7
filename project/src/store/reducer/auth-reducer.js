import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../components/utils/constants.js';

const initState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userImage: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER_AVATAR:
      return {
        ...state,
        userImage: localStorage.getItem('avatar') ?? '',
      };
    case ActionType.RESET_MOVIES_LIST:
      return {
        ...state,
        userImage: localStorage.getItem('avatar') ?? '',
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userImage: '',
      };
    default:
      return state;
  }
};

export default authReducer;
