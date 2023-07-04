import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      {path:"pokemon-list", component: PokemonListComponent},
      {path:"pokemon-list-by-type/:id", component: PokemonListByTypeComponent},
      {path:"pokemon/:id", component: PokemonDetailComponent},
    ])
  ]
  
})
export class PokemonsModule { }
