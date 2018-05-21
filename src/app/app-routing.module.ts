import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './app.config';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const AppUrls = new AppConfig().urls;

const appRoutes: Routes = [
  {path: '', redirectTo: AppUrls.recipes.segment, pathMatch: 'full' },
  {path: AppUrls.shoppingList.segment, component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
