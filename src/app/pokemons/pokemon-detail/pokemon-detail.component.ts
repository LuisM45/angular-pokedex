import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  data: any
  constructor(
    private pokemonSvc:PokemonService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .subscribe((params)=>{
      let id = params.get("id")!! 
        this.pokemonSvc.getPokemonDetails(id).subscribe(
          {
            next: data=> this.data=data
          }
        )
      }
    )
  }

}
