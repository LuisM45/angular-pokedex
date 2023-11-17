import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PokemonAddCommentComponent } from './pokemon-add-comment/pokemon-add-comment.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';



@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonListByTypeComponent,
    PokemonFavoriteComponent,
    MyFavoritesComponent,
    PokemonAddCommentComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    RouterModule.forChild([
      {path:"pokemon-list", component: PokemonListComponent, canActivate: [AuthGuard]},
      {path:"pokemon-list-by-type/:id", component: PokemonListByTypeComponent, canActivate: [AuthGuard]},
      {path:"pokemon/:id", component: PokemonDetailComponent, canActivate: [AuthGuard]},
      {path:"pokemon-favorites", component: MyFavoritesComponent, canActivate: [AuthGuard]},
    ],
    )
  ]
  
  
})
export class PokemonsModule { }
