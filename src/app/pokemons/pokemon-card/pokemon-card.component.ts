import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() id:string|number
  data: any

  constructor(
    private pokemonSvc:PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemonSvc.getPokemonDetails(this.id)
    .subscribe({
      next: (data) => {this.data=data;console.log(this.data)}
    })
  }

}
