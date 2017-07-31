import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output()
    recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('placki', 'ciekawe czy dobre','http://cdn.doradcasmaku.pl/dynamic/07/1c/90/4a/0c7b849cc802a80a8daadca5/1-placuszki-jaglane-jaglane-racuszki-placuszki-z-jaszy-jaglanej-placuszki-bezglutenowe-sniadaniowe-p_fit-215-'),
    new Recipe('placki2', 'sdfgsdfgsdfgsd czy dobre','http://cdn.doradcasmaku.pl/dynamic/07/1c/90/4a/0c7b849cc802a80a8daadca5/1-placuszki-jaglane-jaglane-racuszki-placuszki-z-jaszy-jaglanej-placuszki-bezglutenowe-sniadaniowe-p_fit-215-')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
