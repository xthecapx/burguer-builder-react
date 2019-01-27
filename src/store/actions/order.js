import * as types from './types';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: types.PURCHASE_BURGER_SUCCESS,
    id,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: types.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: types.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = body => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', body)
      .then(response => {
        console.log('[Redux][ContactData]', response);
        dispatch(purchaseBurgerSuccess(response.data.name, body));
      })
      .catch(error => {
        console.log('[Redux][ContactData]', error);
        dispatch(purchaseBurgerFail(error));
      });
  };
};
