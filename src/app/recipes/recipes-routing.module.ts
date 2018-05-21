import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from '../app.config';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const AppUrls = new AppConfig().urls;
const RecipeEditUrl = AppUrls.recipes.id.segment + '/' + AppUrls.recipes.edit.segment;

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent },
    {path: AppUrls.recipes.new.segment, component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: AppUrls.recipes.id.segment, component: RecipeDetailComponent},
    {path: RecipeEditUrl, component: RecipeEditComponent, canActivate: [AuthGuard]}
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

