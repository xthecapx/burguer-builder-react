import * as types from './types';
import axios from '../../axios-orders';

export const addIngredient = name => {
  return { type: types.ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredient = name => {
  return { type: types.REMOVE_INGREDIENT, ingredientName: name };
};

export const setIngredients = ingredients => {
  return {
    type: types.SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFail = () => {
  return {
    type: types.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('/ingredients.json')
      .then(response => dispatch(setIngredients(response.data)))
      .catch(error => dispatch(fetchIngredientsFail()));
  };
};
