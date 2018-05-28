import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromRecipes from '../recipes/store/recipe.reducers';

export interface AppState {
  shoppingList: fromShoppingList.State,
  recipes: fromRecipes.State,
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  recipes: fromRecipes.recipeReducer,
  auth: fromAuth.authReducer
};
