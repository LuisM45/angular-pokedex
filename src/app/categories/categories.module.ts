import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MaterialsModule } from '../materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';



@NgModule({
  declarations: [
    CategoryCardComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'category-list', component: CategoriesListComponent, canActivate: [AuthGuard]}
    ])
  ],
  exports: [
    CategoriesListComponent,
    CategoryCardComponent
  ]
})
export class CategoriesModule { }
