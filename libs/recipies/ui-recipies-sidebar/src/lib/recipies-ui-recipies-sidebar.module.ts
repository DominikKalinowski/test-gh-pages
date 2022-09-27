import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [CommonModule, RecipeItemComponent],
  exports: [RecipeItemComponent]
})
export class RecipiesUiRecipiesSidebarModule {}
