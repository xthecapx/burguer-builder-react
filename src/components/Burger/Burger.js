import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngrient from './BurgerIngredient/BurgerIngredient';

function Burger() {
  return (
    <div className={classes.Burger}>
      <BurgerIngrient type='bread-top' />
      <BurgerIngrient type='cheese' />
      <BurgerIngrient type='meat' />
      <BurgerIngrient type='bread-bottom' />
    </div>
  );
}

export default Burger;
