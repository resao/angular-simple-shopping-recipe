import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppConfig as config } from '../../app.config';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipes from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesState: Observable<fromRecipes.State>;
  authState: Observable<fromAuth.State>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appStore: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.appStore.select('auth');
    this.recipesState = this.appStore.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate([config.urls.recipes.new.segment], {relativeTo: this.route});
  }
}
