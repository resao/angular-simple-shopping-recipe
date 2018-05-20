import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private recipeService: RecipeService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(env.api_url, this.recipeService.getRecipes(), {
      params: new HttpParams().set('auth', token)
    });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get(env.api_url, {
      params: new HttpParams().set('auth', token)
    })
    .pipe(map(
      (recipes: Recipe[]) => {
        for (const recipe of recipes){
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
