export class AppConfig {
  urls = {
    recipes : {
      edit: {
        segment: 'edit'
      },
      id: {
        segment: ':id'
      },
      modulePath: './recipes/recipes.module#RecipesModule',
      new : {
        segment: 'new'
      },
      segment: 'recipes'
    },
    shoppingList: {
      segment: 'shopping-list'
    },
    signin: {
      segment: 'signin'
    },
    signup: {
      segment: 'signup'
    }
  }
}
