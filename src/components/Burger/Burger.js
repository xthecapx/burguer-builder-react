import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngrient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
  const ingredients = props.ingredients;
  let ingridientsElements = Object.keys(ingredients).map(key => {
    return Array.from(Array(ingredients[key]), (_, index) => <BurgerIngrient key={key + index} type={key} />);
  }).reduce((acc, element) => acc.concat(element), []);
  console.log(ingridientsElements);

  if (ingridientsElements.length === 0) {
    ingridientsElements = <p>Please start adding ingredients!!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngrient type='bread-top' />
      {ingridientsElements}
      <BurgerIngrient type='bread-bottom' />
    </div>
  );
}

export default Burger;
