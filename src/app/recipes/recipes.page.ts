import { Component, OnDestroy, OnInit } from '@angular/core';

import { RecipeModel } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnDestroy, OnInit {

  recipes: RecipeModel[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.recipes);
  }

  ionViewWillEnter(): void {
    console.log('ion view will enter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(): void {
    console.log('ion view did enter');
  }

  ionViewWillLeave(): void {
    console.log('ion view will leave');
  }

  ionViewDidLeave(): void {
    console.log('ion view did leave');
  }

  ngOnDestroy(): void {
    console.log('ng on destroy');
  }
}
