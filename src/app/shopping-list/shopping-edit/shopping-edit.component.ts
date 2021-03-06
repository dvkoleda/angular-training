import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../common/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amountValue);
    this.slService.addIngredient(newIngredient);
  }
}
