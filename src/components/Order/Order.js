import React from 'react';
import classes from './Order.module.scss';

function Order(props) {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price: <strong>5.03</strong>
      </p>
    </div>
  );
}

export default Order;
