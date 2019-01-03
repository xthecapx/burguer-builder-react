import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngrient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
  const ingredients = props.ingredients;
  const ingridientsElements = Object.keys(ingredients).map(key => {
    return Array.from(Array(ingredients[key]), (_, index) => <BurgerIngrient key={key + index} type={key} />);
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngrient type='bread-top' />
      {ingridientsElements}
      <BurgerIngrient type='bread-bottom' />
    </div>
  );
}

export default Burger;
