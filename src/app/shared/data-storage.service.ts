import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  API_URL = 'https://ng-recipe-book-c67db.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.API_URL, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get(this.API_URL)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes){
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
