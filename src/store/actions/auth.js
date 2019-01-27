import * as types from './types';
import axios from '../../axios-auth';

export const authStart = () => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: types.AUTH_SUCCESS,
    authData
  };
};

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    error
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(`signupNewUser?key=${process.env.REACT_APP_FB}`, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail());
      });
  };
};
