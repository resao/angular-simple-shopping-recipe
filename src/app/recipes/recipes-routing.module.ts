import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig as config } from '../app.config';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeEditUrl = config.urls.recipes.id.segment + '/' + config.urls.recipes.edit.segment;

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent },
    {path: config.urls.recipes.new.segment, component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: config.urls.recipes.id.segment, component: RecipeDetailComponent},
    {path: recipeEditUrl, component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class RecipesRoutingModule {}

