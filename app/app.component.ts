import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe List</h1>
    <img src="/resources/img/recipe-box-1.jpg" alt="recipe box">
    <div class="well" *ngFor="let currentRecipe of recipes">
      <ul (click)="showRecipe(currentRecipe)">
        <li class="title">{{currentRecipe.title}}</li>
        <div *ngIf="selectedRecipe">
          <ul>
            <li class="ingredients">Ingredients: {{currentRecipe.ingredients}}</li>
            <ul>
              <li class="instructions">instructions: {{currentRecipe.instructions}}</li>
            </ul>
          </ul>
        </div>
      </ul>
    </div>
  </div>
  `
  //per lina's advice, to show ingredients and instructions separately, put them in another div or well away from selectedRecipe.title.
})

export class AppComponent {
recipes: Recipe[] = [
  new Recipe("Pumpkin Bread", "Pumpkin, Eggs, Flour, Milk, Salt, Sugar, Spices", "1. Mix ingredients, 2. Place in loaf pan, 3. Put in oven at 350 degrees for 1 hour."),
  new Recipe("PB&J Sandwich", "Peanut butter, jelly, bread", "1. slather jelly and peanut button each slice of bread, 2. Smash the two pieces together and enjoy."),
  new Recipe("Cereal", "Cereal, milk", "1. Pour cereal into bowl, 2. Pour milk over cereal, 3. Eat cereal.")
];

selectedRecipe = null;

showRecipe(viewRecipe) {
  this.selectedRecipe = viewRecipe;
}

}



export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) { }
}
