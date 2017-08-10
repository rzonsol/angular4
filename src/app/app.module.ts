import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {ShopingEditComponent} from './shoping-list/shoping-edit/shoping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shoping-list/shopping-list.sergvice";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
