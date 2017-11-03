import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description',
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb')
  ];

  constructor() {}

  ngOnInit() {
  }

}
