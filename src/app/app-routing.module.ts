import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './app.config';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const AppUrls = new AppConfig().urls;

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: AppUrls.recipes.segment, loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: AppUrls.shoppingList.segment, component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
