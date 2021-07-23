import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {AuthorizationStatus} from '../../utils/constants';
import {getAuthorizationStatus} from '../../../store/selector/selector';
import {AppRoute} from '../../utils/constants';

function PrivateRoute ({render, path, exact}) {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
