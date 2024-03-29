import { Injectable } from '@angular/core';

import { RecipeModel } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: RecipeModel[] = [
    {id: 'r1', title: 'Schnitzel', imageUrl: '../../assets/schnitzel.jfif', ingredients: ['Pommes', 'Schnitzel', 'Bier']},
    {id: 'r2', title: 'Doro Wat', imageUrl: '../../assets/doro.jfif', ingredients: ['Injera', 'Ayib', 'Doro wat']},
    {id: 'r3', title: 'Boeuf Bourgignon', imageUrl: '../../assets/boeuf.jfif', ingredients: ['Boeuf', 'Sauce', 'Vin']},
    {id: 'r4', title: 'Falafel', imageUrl: '../../assets/falafel.jfif', ingredients: ['Falafel', 'Fanta', 'Bread']}
  ];

  constructor() { }

  getAllRecipes(): RecipeModel[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): RecipeModel {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string): void {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
