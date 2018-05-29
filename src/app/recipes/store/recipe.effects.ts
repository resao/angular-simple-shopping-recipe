import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { environment as env } from '../../../environments/environment';

import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipes from './recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(
      take(1),
      withLatestFrom(this.store.select('auth')),
      switchMap(([action, authState]) => {
        return this.http.get(env.api_url, {
          params: new HttpParams().set('auth', authState.token)
        })
      }),
      map(
        (recipes: Recipe[]) => {
          for (const recipe of recipes){
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          }
        }
      )
    );

  @Effect({dispatch: false})
  recipeStore= this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .pipe(
      take(1),
      withLatestFrom(this.store.select('recipes'), this.store.select('auth')),
      switchMap(([action, recipeState, authState]) => {
        return this.http.put(env.api_url, recipeState.recipes, {
          params: new HttpParams().set('auth', authState.token)
        });
      })
    );

  constructor(
    private store: Store<fromRecipes.FeatureState>,
    private actions$: Actions,
    private http: HttpClient,
    private router: Router) { }
}
