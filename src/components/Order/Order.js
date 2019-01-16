import React from 'react';
import classes from './Order.module.scss';

function Order(props) {
  const $ingredients = Object.keys(props.ingredients)
    .filter(ingredient => props.ingredients[ingredient])
    .map((ingredient, index, ingredients) => {
      return (
        <span className={classes.Ingredients} key={ingredient + index}>
          {ingredient} ({props.ingredients[ingredient]}){ingredients.length - 1 === index ? null : ', '}
        </span>
      );
    })
    .reduce((acc, element) => acc.concat(element), []);

  return (
    <div className={classes.Order}>
      <p>Ingredients: {$ingredients}</p>
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </div>
  );
}

export default Order;
