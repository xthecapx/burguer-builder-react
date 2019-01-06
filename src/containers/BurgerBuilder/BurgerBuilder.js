import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    this.setState(prevState => {
      const ingredients = {
        ...prevState.ingredients
      };
      ingredients[type] = prevState.ingredients[type] + 1;

      return {
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
        ingredients
      };
    });
  };

  removeIngredientHandler = type => {
    this.setState(prevState => {
      if (prevState.ingredients[type] <= 0) {
        return prevState;
      }

      const ingredients = {
        ...prevState.ingredients
      };
      ingredients[type] = prevState.ingredients[type] - 1;

      return {
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        ingredients
      };
    });
  };

  render() {
    return (
      <>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
