import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: this.props.location && this.props.location.state
  };

  onCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  onCheckoutContinuedHandler = () => {
    this.props.history.push('/checkout/contact-data');
  };

  render() {
    let $checkoutSummary = null;

    if (this.state.ingredients) {
      $checkoutSummary = (
        <>
          <CheckoutSummary
            ingredients={this.state.ingredients}
            onCheckoutCancelled={this.onCheckoutCancelledHandler}
            onCheckoutContinued={this.onCheckoutContinuedHandler}
          />
          <Route path={this.props.match.path + '/contact-data'} exact component={ContactData} />{' '}
        </>
      );
    } else {
      $checkoutSummary = <Redirect to='/' />;
    }

    return <div>{$checkoutSummary}</div>;
  }
}

export default Checkout;
