import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, switchMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { environment as env } from '../../../environments/environment';

import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(
      take(1),
      switchMap((action: RecipeActions.FetchRecipes) => {
        return this.store.select('auth')
      }),
      switchMap((authState: fromAuth.State) => {
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

  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
    private http: HttpClient,
    private router: Router) { }
}
