import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { environment as env } from '../../environments/environment';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class DataStorageService {

  constructor(
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private recipeService: RecipeService) {}

  storeRecipes() {
    return this.store.select('auth').pipe(switchMap((authState: fromAuth.State) => {
      return this.http.put(env.api_url, this.recipeService.getRecipes(), {
        params: new HttpParams().set('auth', authState.token)
      });
    }))
  }

  getRecipes() {
    return this.store.select('auth').pipe(switchMap((authState: fromAuth.State) => {
      return this.http.get(env.api_url, {
        params: new HttpParams().set('auth', authState.token)
      })
    })).pipe(map(
      (recipes: Recipe[]) => {
        for (const recipe of recipes){
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    )
  }
}
