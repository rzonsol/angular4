import {Component, OnInit} from '@angular/core';
import {Ingredien} from "../shared/ingredien.model";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingrediens:Ingredien[] = [
    new Ingredien('ziemniaki',5),
    new  Ingredien('cebula', 2)
  ];

  constructor() {
  }

  ngOnInit() {
  }
  onIngredientadded(test:Ingredien){
    this.ingrediens.push(test);
  }

}
