import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Recipe } from './../recipe.model';
import { AppConfig as config } from '../../app.config';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipeActions from '../store/recipe.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipes from '../store/recipe.reducers';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe$: Observable<Recipe>;
  id: number;
  authState: Observable<fromAuth.State>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipes.FeatureState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe$ = this.store.select('recipes').pipe(
          take(1),
          map((recipesState: fromRecipes.State) => {
            return recipesState.recipes[this.id];
          })
        );
      }
    );
  }

  onAddToShoppingList() {
    this.store.select('recipes').pipe(take(1))
      .subscribe((recipesState: fromRecipes.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipesState.recipes[this.id].ingredients));
      })
  }

  onEditRecipe() {
    this.router.navigate([config.urls.recipes.edit.segment], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate([config.urls.recipes.segment]);
  }

}
