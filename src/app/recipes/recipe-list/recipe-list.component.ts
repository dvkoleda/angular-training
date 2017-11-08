import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe one', 'Test Description 1',
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb'),
    new Recipe('Recipe two', 'Test Description 2',
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb')
  ];

  constructor() {}

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
