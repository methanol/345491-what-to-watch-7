import browserHistory from '../../browser-history';
import {ActionType} from '../actions';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export const replace = (_store) => (next) => (action) => {

  if (action.type === ActionType.REPLACE_ROUTE) {
    browserHistory.replace('/');
  }

  return next(action);
};
