import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList:any
  constructor(
    private pokemonSvc: PokemonService,
    private angularFirestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList(){
    this.pokemonSvc.getPokemonList().subscribe(
      {
        next: data=> {
          console.log(data)
          this.pokemonList = data.results
        }
      }
      )
  }

}
