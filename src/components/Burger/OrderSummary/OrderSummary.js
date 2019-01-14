import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // Could be a functional component
  componentWillUpdate() {
    console.log('[OrderSummary] componentWillUpdate');
  }
  render() {
    const ingredientsElements = Object.keys(this.props.ingredients).map(ingredient => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {this.props.ingredients[ingredient]}
        </li>
      );
    });

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsElements}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancel} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType='Success'>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
