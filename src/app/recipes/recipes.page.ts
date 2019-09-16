import { Component, OnInit } from '@angular/core';

import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: RecipeModel[] = [
    {id: 'r1', title: 'Schnitzel', imageUrl: '../../assets/schnitzel.jfif', ingredients: ['Pommes', 'Schnitzel', 'Bier']},
    {id: 'r2', title: 'Doro Wat', imageUrl: '../../assets/doro.jfif', ingredients: ['Injera', 'Ayib', 'Doro wat']},
    {id: 'r3', title: 'Boeuf Bourgignon', imageUrl: '../../assets/boeuf.jfif', ingredients: ['Boeuf', 'Sauce', 'Vin']},
    {id: 'r4', title: 'Falafel', imageUrl: '../../assets/falafel.jfif', ingredients: ['Falafel', 'Fanta', 'Bread']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
