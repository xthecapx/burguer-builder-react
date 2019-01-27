import * as types from './types';

export const addIngredient = name => {
  return { type: types.ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredient = name => {
  return { type: types.REMOVE_INGREDIENT, ingredientName: name };
};
