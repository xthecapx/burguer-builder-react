import * as types from './types';
import axios from '../../axios-auth';

export const authStart = () => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = ({ idToken, localId }) => {
  return {
    type: types.AUTH_SUCCESS,
    token: idToken,
    userId: localId
  };
};

export const authFail = ({ error }) => {
  return {
    type: types.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
  localStorage.removeItem('userId');
  return {
    type: types.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const login = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let URL = `signupNewUser?key=${process.env.REACT_APP_FB}`;

    if (isSignup) {
      URL = `verifyPassword?key=${process.env.REACT_APP_FB}`;
    }

    axios
      .post(URL, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

        console.log(response);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expiresIn', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: types.SET_AUTH_REDIRECT_PATH,
    path
  };
};

export const tryAuthSignup = () => {
  return dispatch => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(logout());
    } else {
      const expiresIn = new Date(localStorage.getItem('expiresIn'));

      if (expiresIn <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess({ idToken: token, localId: userId }));
        dispatch(checkAuthTimeout((expiresIn.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
