import {redirect, replace} from './redirect';
import {redirectToRoute, replaceRoute} from '../actions';
import {AppRoute} from '../../components/utils/constants';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invokeRedirect = (action) => redirect(store)(next)(action);
  const invokeReplace = (action) => replace(store)(next)(action);
  return {store, next, invokeRedirect, invokeReplace};
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
  replace(path) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

describe('Middleware: redirect', () => {
  it('action should passes to next middleware', () => {
    const {invokeRedirect, next} = mockRedux();
    const action = redirectToRoute(AppRoute.ROOT);
    invokeRedirect(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const {invokeRedirect} = mockRedux();
    invokeRedirect(redirectToRoute(AppRoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.LOGIN);

    invokeRedirect(redirectToRoute(AppRoute.ROOT));
    expect(fakeHistory.location.pathname).toBe(AppRoute.ROOT);
  });

  it('should not redirect because bad action', () => {
    const url = '/wrong-url';
    const {invokeRedirect} = mockRedux();
    invokeRedirect({type: 'TEST_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});

describe('Middleware: replace', () => {
  it('action should passes to next middleware', () => {
    const {invokeReplace, next} = mockRedux();
    const action = replaceRoute(AppRoute.ROOT);
    invokeReplace(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const {invokeReplace} = mockRedux();
    invokeReplace(replaceRoute(AppRoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.LOGIN);
  });

  it('should not redirect because bad action', () => {
    const url = '/wrong-url';
    const {invokeReplace} = mockRedux();
    invokeReplace({type: 'TEST_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
