import {Component, OnInit} from '@angular/core';
import {Ingredien} from "../shared/ingredien.model";
import {ShoppingListService} from "./shopping-list.sergvice";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {


  ingrediens: Ingredien[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.shoppingListService.ingredientsChange.subscribe(
      (ingrediens: Ingredien[]) => {
        this.ingrediens = ingrediens;
      });
    this.ingrediens = this.shoppingListService.getIngrediens();
  }
}
