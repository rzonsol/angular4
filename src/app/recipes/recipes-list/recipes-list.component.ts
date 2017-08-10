import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeServce: RecipeService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeServce.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
