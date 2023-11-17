import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit, OnDestroy {
  @Input() pokemonData: any;
  data: any;

  subscription: Subscription
  
  constructor(private angularFirestore:AngularFirestore) { }

  ngOnInit(): void {
    let document = this.angularFirestore.collection('pokemons').doc(this.pokemonData.id.toString()).valueChanges()
    this.subscription = document.subscribe((res=>this.data=res))
  }

  markAsFavorite(value: boolean){
    this.angularFirestore
    .collection('pokemons')
    .doc(this.pokemonData.id.toString())
    .update({
      isFavorite: value
    })
  }

  ngOnDestroy(): void{
    if(this.subscription) this.subscription.unsubscribe()
  }
}
