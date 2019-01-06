import React from 'react';
import Button from '../../UI/Button/Button';

function OrderSummary(props) {
  const ingredientsElements = Object.keys(props.ingredients).map(ingredient => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {props.ingredients[ingredient]}
      </li>
    );
  });

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsElements}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancel} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType='Success'>
        CONTINUE
      </Button>
    </>
  );
}

export default OrderSummary;
