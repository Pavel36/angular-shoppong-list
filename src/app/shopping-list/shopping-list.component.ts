import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 128),
    new Ingredient('Apples', 12),
    new Ingredient('Tomatoes', 18),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
