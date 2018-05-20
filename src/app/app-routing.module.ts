import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupinComponent } from './auth/signupin/signupin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from './app.config';

const AppUrls = new AppConfig().urls;
const RecipeEditUrl = AppUrls.recipes.id.segment + '/' + AppUrls.recipes.edit.segment;

const appRoutes: Routes = [
  {path: '', redirectTo: AppUrls.recipes.segment, pathMatch: 'full' },
  {path: AppUrls.recipes.segment, component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent },
    {path: AppUrls.recipes.new.segment, component: RecipeEditComponent},
    {path: AppUrls.recipes.id.segment, component: RecipeDetailComponent},
    {path: RecipeEditUrl, component: RecipeEditComponent}
  ]},
  {path: AppUrls.shoppingList.segment, component: ShoppingListComponent},
  {path: AppUrls.signup.segment, component: SignupinComponent },
  {path: AppUrls.signin.segment, component: SignupinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
