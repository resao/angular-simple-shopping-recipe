import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupinComponent } from './auth/signupin/signupin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from './app.config';
import { AuthGuard } from './auth/auth-guard.service';

const AppUrls = new AppConfig().urls;

const appRoutes: Routes = [
  {path: '', redirectTo: AppUrls.recipes.segment, pathMatch: 'full' },
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
