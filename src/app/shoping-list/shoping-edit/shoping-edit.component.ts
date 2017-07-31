import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredien} from "../../shared/ingredien.model";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputRef: ElementRef;
  @ViewChild('amountInput')
  amountInputRef: ElementRef;
  @Output()
  ingredientAdded = new EventEmitter<Ingredien>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredien = new Ingredien(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredien);
  }
}
