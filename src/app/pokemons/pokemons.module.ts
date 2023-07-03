import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      {path:"pokemon-list", component: PokemonListComponent},
      {path:"pokemon-list-by-type/:id", component: PokemonListByTypeComponent}
    ])
  ]
  
})
export class PokemonsModule { }
