import * as fromShoppingList from './shopping-list.reducers';
import * as fromActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

describe('ShoppingListReducer', () => {
  const { initialState } = fromShoppingList;

  const editIndex = 1;
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
    describe('ADD_INGREDIENT action', () => {
      it('should add the new ingredient to the ingredients array', () => {
        const action = new fromActions.AddIngredient(ingredient);
        const state = fromShoppingList.shoppingListReducer(initialState, action);

        expect(state.ingredients.length).toEqual(3);
        expect(state.ingredients).toEqual([...initialState.ingredients, ingredient]);
      });
    });

    describe('ADD_INGREDIENTS action', () => {
      it('should add the new ingredients to the ingredients array', () => {
        const ingredients: Ingredient[] = [];
        ingredients.push(ingredient, ingredient, ingredient);

        const action = new fromActions.AddIngredients(ingredients);
        const state = fromShoppingList.shoppingListReducer(initialState, action);

        expect(state.ingredients.length).toEqual(5);
        expect(state.ingredients).toEqual([...initialState.ingredients, ...ingredients]);
      });
    });

    describe('UPDATE_INGREDIENT action', () => {
      it('should update the ingredient', () => {
        const previousState = {
          ...initialState,
          editedIngredient: null,
          editedIngredientIndex: editIndex
        };
        const action = new fromActions.UpdateIngredient({ingredient});
        const state = fromShoppingList.shoppingListReducer(previousState, action);

        expect(state.ingredients.length).toEqual(2);
        expect(state.ingredients[editIndex]).toEqual(ingredient);
      });
    });
  });

  describe('Edit Actions', () => {
    describe('START_EDIT action', () => {
      it('should set the edited ingredient and index', () => {
        const action = new fromActions.StartEdit(editIndex);
        const state = fromShoppingList.shoppingListReducer(initialState, action);

        expect(state).toEqual({
          ...initialState,
          editedIngredient: {...initialState.ingredients[editIndex]},
          editedIngredientIndex: editIndex
        });
      });
    });

    describe('STOP_EDIT action', () => {
      it('should reset edited ingredient and index', () => {
        const previousState: fromShoppingList.State = {
          ...initialState,
          editedIngredient: {...ingredient},
          editedIngredientIndex: editIndex
        };
        const action = new fromActions.StopEdit();
        const state = fromShoppingList.shoppingListReducer(previousState, action);

        expect(state).toEqual(initialState);
      });
    });
  });
});
