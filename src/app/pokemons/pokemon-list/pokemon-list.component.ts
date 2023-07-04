import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList:any
  constructor(private pokemonSvc: PokemonService) { }

  ngOnInit(): void {
    this.pokemonSvc.getPokemonList().subscribe(
      {
        next: data=> {this.pokemonList = data.results}
      }
      )
  }

}
