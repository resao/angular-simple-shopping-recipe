import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig as config} from './app.config';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: config.urls.recipes.segment, loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: config.urls.shoppingList.segment, loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
