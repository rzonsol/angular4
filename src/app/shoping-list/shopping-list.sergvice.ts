import {Ingredien} from "../shared/ingredien.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {


  ingredientsChange = new EventEmitter<Ingredien[]>();

  private ingrediens: Ingredien[] = [
    new Ingredien('ziemniaki', 5),
    new Ingredien('cebula', 2)
  ];

  getIngrediens() {
    return this.ingrediens.slice();
  }

  addIngredient(ingredient: Ingredien) {
    this.ingrediens.push(ingredient);
    this.ingredientsChange.emit(this.ingrediens.slice());
  }

  addIngredients(ingredients: Ingredien[]) {
    this.ingrediens.push(...ingredients);
    this.ingredientsChange.emit(this.ingrediens.slice());
  }
}
