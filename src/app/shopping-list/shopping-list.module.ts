import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './store/shopping-list.reducers';

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
    StoreModule.forFeature('shoppingList', shoppingListReducer)
  ]
})
export class ShoppingListModule {}
