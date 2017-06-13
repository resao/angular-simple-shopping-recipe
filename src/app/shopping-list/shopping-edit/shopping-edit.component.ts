import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    console.log(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

}
