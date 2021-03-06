import { Injectable } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }
}
