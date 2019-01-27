import * as types from './types';

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
  };
};
