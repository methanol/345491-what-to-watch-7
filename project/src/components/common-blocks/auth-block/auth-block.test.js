import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {AuthBlock} from './auth-block';
import {AuthorizationStatus} from '../../utils/constants';

describe('Component: AuthBlock', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <AuthBlock authorizationStatusStateProp = {AuthorizationStatus.NO_AUTH} onLogoutAction = {()=>{}}/>
      </Router>,
    );
    const textElement = getByText('Sign In');

    expect(textElement).toBeInTheDocument();
  });
});
