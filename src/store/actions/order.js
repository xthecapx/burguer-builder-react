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

export const purchaseInit = () => {
  return {
    type: types.PURCHASE_INIT
  };
};

export const fechtOrdersSucess = orders => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fechtOrdersFail = error => {
  return {
    type: types.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: types.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = Object.keys(res.data).map(key => {
          return { ...res.data[key], key };
        });

        console.log('[Redux][FetchOrders]', fetchedOrders);
        dispatch(fechtOrdersSucess(fetchedOrders));
      })
      .catch(error => {
        dispatch(fechtOrdersFail(error));
      });
  };
};
