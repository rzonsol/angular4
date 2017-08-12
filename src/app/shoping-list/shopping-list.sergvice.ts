import {Ingredien} from "../shared/ingredien.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {


  ingredientsChange = new Subject<Ingredien[]>();

  private ingrediens: Ingredien[] = [
    new Ingredien('ziemniaki', 5),
    new Ingredien('cebula', 2)
  ];

  getIngrediens() {
    return this.ingrediens.slice();
  }

  addIngredient(ingredient: Ingredien) {
    this.ingrediens.push(ingredient);
    this.ingredientsChange.next(this.ingrediens.slice());
  }

  addIngredients(ingredients: Ingredien[]) {
    this.ingrediens.push(...ingredients);
    this.ingredientsChange.next(this.ingrediens.slice());
  }
}
