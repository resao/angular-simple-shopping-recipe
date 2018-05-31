import * as fromShoppingList from './shopping-list.reducers';
import * as fromActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

describe('ShoppingListReducer', () => {
  const { initialState } = fromShoppingList;

  const ingredient: Ingredient = {
    name: 'Bananas',
    amount: 20
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = fromShoppingList.shoppingListReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Ingredient Actions', () => {
  });

  describe('Edit Actions', () => {
    describe('STOP_EDIT action', () => {
      it('should reset edited ingredient and index', () => {
        const previousState: fromShoppingList.State = {
          ...initialState,
          editedIngredient: {...ingredient},
          editedIngredientIndex: 2
        };
        const action = new fromActions.StopEdit();
        const state = fromShoppingList.shoppingListReducer(previousState, action);

        expect(state).toEqual(initialState);
      });
    })
  });
});
