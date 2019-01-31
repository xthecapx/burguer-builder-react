import * as types from '../actions/types';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIgredient = (state, action) => {
  const updatedIngredients = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  });

  return updateObject(state, {
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    ingredients: updatedIngredients,
    building: true
  });
};

const deleteIngredient = (state, action) => {
  const updatedIngredients = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  });

  return updateObject(state, {
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    ingredients: updatedIngredients,
    building: true
  });
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: initialState.totalPrice,
    error: false,
    building: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return addIgredient(state, action);
    case types.REMOVE_INGREDIENT:
      return deleteIngredient(state, action);
    case types.SET_INGREDIENTS:
      return setIngredients(state, action);
    case types.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
