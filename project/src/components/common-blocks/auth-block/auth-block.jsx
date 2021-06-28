import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AuthorizationStatus} from '../../utils/constants';
import {logout} from '../../../store/api-actions';

export function AuthBlock(props) {
  const {authorizationStatusStateProp, onLogoutAction} = props;

  const handleClick = () => {
    onLogoutAction();
  };

  return ( authorizationStatusStateProp === AuthorizationStatus.AUTH ?
    (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to='/mylist'>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to='/' className="user-block__link" onClick = {handleClick}>
            Sign Out
          </Link>
        </li>
      </ul>
    ) : (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to='/login' className="user-block__link">
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
};

const mapStateToProps = (state) => ({
  authorizationStatusStateProp: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutAction() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);
