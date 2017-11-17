import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'Recipe one',
      'Test Description 1',
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb',
      [
        new Ingredient('meat', 1),
        new Ingredient('French Frice', 10)
      ]
    ),
    new Recipe('Recipe two',
      'Test Description 2',
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb',
      [
        new Ingredient('meat', 1),
        new Ingredient('French Rice', 10)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
