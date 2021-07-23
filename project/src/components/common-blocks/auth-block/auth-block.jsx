import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from '../../utils/constants';
import {logout} from '../../../store/api-actions';
import {AppRoute} from '../../utils/constants';
import {getAuthorizationStatus, getUserImage} from '../../../store/selector/selector';

export function AuthBlock(props) {
  const {authorizationStatusStateProp, userImageStateProp = '', onLogoutAction} = props;

  const handleClick = () => {
    onLogoutAction();
  };

  return ( authorizationStatusStateProp === AuthorizationStatus.AUTH ?
    (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MY_LIST}>
              <img src={userImageStateProp} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.ROOT} className="user-block__link" onClick = {handleClick}>
            Sign Out
          </Link>
        </li>
      </ul>
    ) : (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.LOGIN} className="user-block__link">
            Sign In
          </Link>
        </li>
      </ul>
    )
  );
}

AuthBlock.propTypes = {
  authorizationStatusStateProp: PropTypes.string.isRequired,
  onLogoutAction: PropTypes.func.isRequired,
  userImageStateProp: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatusStateProp: getAuthorizationStatus(state),
  userImageStateProp: getUserImage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutAction() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);
