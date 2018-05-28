import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

export interface State {
  recipes: Recipe[]
}

const initialState: State = {
  recipes: [
    new Recipe(
      'A test Recipe',
      'This is a test description',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('grass', 3)
      ]),
    new Recipe(
      'Another test Recipe',
      'This is another test description',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Butter', 3)
      ]),
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case(RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case(RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case(RecipeActions.UPDATE_RECIPE):
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        ...state,
        recipes: recipes
      }
    case(RecipeActions.DELETE_RECIPE):
      const updatedRecipes = [...state.recipes].splice(action.payload, 1);
      return {
        ...state,
        recipes: updatedRecipes
      }
    default:
      return state;
  }
}
