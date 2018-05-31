import * as fromShoppingList from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

const ingredient: Ingredient = {
  name: 'Tomatoes',
  amount: 5
};

const ingredients: Ingredient[] = [{
  name: 'Tomatoes',
  amount: 5
}, {
  name: 'Apples',
  amount: 10
}];

describe('Shopping List Actions', () => {
  describe('Ingredient Actions', () => {
    describe('AddIngredient', () => {
      it('should create an action', () => {
        const payload = { ...ingredient };
        const action = new fromShoppingList.AddIngredient(payload);

        expect({ ...action }).toEqual({
          type: fromShoppingList.ADD_INGREDIENT,
          payload
        });
      });
    });

    describe('AddIngredients', () => {
      it('should create an action', () => {
        const payload = [ ...ingredients];
        const action = new fromShoppingList.AddIngredients(payload);

        expect({ ...action }).toEqual({
          type: fromShoppingList.ADD_INGREDIENTS,
          payload
        });
      });
    });

    describe('UpdateIngredient', () => {
      it('should create an action', () => {
        const payload = {ingredient: { ...ingredient }};
        const action = new fromShoppingList.UpdateIngredient(payload);

        expect({ ...action }).toEqual({
          type: fromShoppingList.UPDATE_INGREDIENT,
          payload
        });
      });
    });

    describe('DeleteIngredient', () => {
      it('should create an action', () => {
        const payload = 1;
        const action = new fromShoppingList.DeleteIngredient(payload);

        expect({ ...action }).toEqual({
          type: fromShoppingList.DELETE_INGREDIENT,
          payload
        });
      });
    });
  });

  describe('Edit Actions', () => {
    describe('StartEdit', () => {
      it('should create an action', () => {
        const payload = 1;
        const action = new fromShoppingList.StartEdit(payload);

        expect({ ...action }).toEqual({
          type: fromShoppingList.START_EDIT,
          payload
        });
      });
    });

    describe('StopEdit', () => {
      it('should create an action', () => {
        const action = new fromShoppingList.StopEdit();

        expect({ ...action }).toEqual({
          type: fromShoppingList.STOP_EDIT
        });
      });
    });
  });
});
