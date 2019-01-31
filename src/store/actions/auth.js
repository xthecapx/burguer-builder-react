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
        console.log(response);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data));
      });
  };
};
