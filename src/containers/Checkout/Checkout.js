import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: this.props.location.state && this.props.location.state.ingredients,
    totalPrice: this.props.location.state && this.props.location.state.totalPrice
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
          <Route
            path={this.props.match.path + '/contact-data'}
            exact
            render={props => <ContactData {...props} ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />}
          />
        </>
      );
    } else {
      $checkoutSummary = <Redirect to='/' />;
    }

    return <div>{$checkoutSummary}</div>;
  }
}

export default Checkout;
