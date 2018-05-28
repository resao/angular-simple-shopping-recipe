import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

export interface FeatureState {
  recipes: State
}

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

export function recipeReducer(state = initialState, action/*: AuthActions.AuthActions*/) {
  /*switch (action.type) {
    case(AuthActions.SIGNUP):
    case(AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case(AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case(AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }*/
}
