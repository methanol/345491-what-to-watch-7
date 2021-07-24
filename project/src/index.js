import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './api';
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import rootReducer from './store/reducer/root-reducer';
import {fetchMoviesList, fetchPromoMovie, checkAuth} from './store/api-actions';
import {requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './components/utils/constants';
import {redirect, replace} from './store/middleware/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect, replace),
});

store.dispatch(checkAuth());
store.dispatch(fetchPromoMovie());
store.dispatch(fetchMoviesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
        <ToastContainer
          position="top-right"
          // autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
