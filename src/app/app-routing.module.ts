import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './app.config';
import { HomeComponent } from './core/home/home.component';

const AppUrls = new AppConfig().urls;

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: AppUrls.recipes.segment, loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: AppUrls.shoppingList.segment, loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
