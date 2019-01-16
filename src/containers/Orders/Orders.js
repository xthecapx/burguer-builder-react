import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = Object.keys(res.data).map(key => {
          return { ...res.data[key], key };
        });

        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    const $orders = this.state.orders.map(order => <Order key={order.key} ingredients={order.ingredients} price={order.price} />);

    return <div>{$orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
