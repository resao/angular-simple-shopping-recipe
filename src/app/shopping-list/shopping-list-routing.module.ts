import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from '../app.config';
import { ShoppingListComponent } from './shopping-list.component';

const AppUrls = new AppConfig().urls;

const shoppingListRoutes: Routes = [
  {path: '', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule]
})

export class ShoppingListRoutingModule {}





