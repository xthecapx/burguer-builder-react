import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  onCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  onCheckoutContinuedHandler = () => {
    this.props.history.push('/checkout/contact-data');
  };

  render() {
    let $checkoutSummary = null;

    if (this.props.ingredients) {
      $checkoutSummary = (
        <>
          <CheckoutSummary
            ingredients={this.props.ingredients}
            onCheckoutCancelled={this.onCheckoutCancelledHandler}
            onCheckoutContinued={this.onCheckoutContinuedHandler}
          />
          <Route path={this.props.match.path + '/contact-data'} exact component={ContactData} />
        </>
      );
    } else {
      $checkoutSummary = <Redirect to='/' />;
    }

    return <div>{$checkoutSummary}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
