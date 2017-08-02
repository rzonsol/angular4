import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredien} from "../shared/ingredien.model";
import {ShoppingListService} from "../shoping-list/shopping-list.sergvice";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('placki',
      'ciekawe czy dobre',
      'http://cdn.doradcasmaku.pl/dynamic/07/1c/90/4a/0c7b849cc802a80a8daadca5/1-placuszki-jaglane-jaglane-racuszki-placuszki-z-jaszy-jaglanej-placuszki-bezglutenowe-sniadaniowe-p_fit-215-',
      [new Ingredien('cos1', 1),
        new Ingredien('asdfas', 2)]),
    new Recipe('placki2',
      'sdfgsdfgsdfgsd czy dobre',
      'http://cdn.doradcasmaku.pl/dynamic/07/1c/90/4a/0c7b849cc802a80a8daadca5/1-placuszki-jaglane-jaglane-racuszki-placuszki-z-jaszy-jaglanej-placuszki-bezglutenowe-sniadaniowe-p_fit-215-',
      [])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredien[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
