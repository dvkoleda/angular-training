import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples' , 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
