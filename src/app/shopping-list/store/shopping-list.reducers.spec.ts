import * as fromShoppingList from './shopping-list.reducers';
import * as fromActions from './shopping-list.actions';

describe('ShoppingListReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromShoppingList;
      const action = {} as any;
      const state = fromShoppingList.shoppingListReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  })
});
