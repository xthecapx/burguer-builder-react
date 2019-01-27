import * as types from '../actions/types';

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id
      };

      return {
        ...state,
        loading: false,
        order: state.orders.concat(newOrder)
      };
    case types.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: true
      };
    case types.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
