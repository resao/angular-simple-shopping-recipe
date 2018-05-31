import * as fromShoppingList from './shopping-list.actions';

describe('Shopping List Actions', () => {
  describe('Ingredient Actions', () => {
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
