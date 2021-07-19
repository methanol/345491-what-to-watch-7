import authReducer from './auth-reducer';
import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../components/utils/constants.js';

const initState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const changedState = Object.assign({}, initState);

describe('Data reducer testing', () => {
  it('without additional parameters should return initial state', () => {
    expect(authReducer(undefined, {}))
      .toEqual(initState);
  });
  it('should logout', () => {
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(authReducer(changedState, logoutAction))
      .toEqual(Object.assign(changedState, {authorizationStatus: AuthorizationStatus.NO_AUTH}));
  });
  it('should login', () => {
    const loginAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(authReducer(changedState, loginAction))
      .toEqual(Object.assign(changedState, {authorizationStatus: AuthorizationStatus.AUTH}));
  });
});

