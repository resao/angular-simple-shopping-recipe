import * as fromShoppingList from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

const ingredient = {
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
          payload,
        });
      });
    });
  });

  describe('Edit Actions', () => {
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
