import {Ingredien} from "../shared/ingredien.model";

export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredien[];


  constructor(name: string, description: string, imagePath: string, ingredients: Ingredien[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
