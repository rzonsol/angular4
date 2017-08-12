import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredien} from "../shared/ingredien.model";
import {ShoppingListService} from "./shopping-list.sergvice";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy{

  private subscription : Subscription;

  ingrediens: Ingredien[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription= this.shoppingListService.ingredientsChange.subscribe(
      (ingrediens: Ingredien[]) => {
        this.ingrediens = ingrediens;
      });
    this.ingrediens = this.shoppingListService.getIngrediens();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
