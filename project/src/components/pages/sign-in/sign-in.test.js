import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import {SignIn} from './sign-in';
import {AuthorizationStatus} from '../../utils/constants';

const mockStore = configureStore({});

describe('Component: SignIn', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={mockStore({auth: {authorizationStatus: AuthorizationStatus.NO_AUTH}})}>
        <Router history={history}>
          <SignIn onSubmitAction={()=>{}} authorizationStatusStateProp = {AuthorizationStatus.NO_AUTH}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Sign in')[1]).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });
});
