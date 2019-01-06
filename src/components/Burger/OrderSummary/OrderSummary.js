import React from 'react';

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
      <p>Continue to Checkout?</p>
    </>
  );
}

export default OrderSummary;
