import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import {login} from '../../../store/api-actions';

export function SignIn(props) {

  const {onSubmitAction} = props;

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitAction({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <Logo/>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <PageFooter/>
      </div>
    </>
  );
}

SignIn.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatusStateProp: state.auth.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(authData) {
    dispatch(login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
