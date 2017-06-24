import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
  API_URL = 'https://ng-recipe-book-c67db.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.API_URL, this.recipeService.getRecipes());
  }
}
