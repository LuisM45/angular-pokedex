import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.scss']
})
export class PokemonListByTypeComponent implements OnInit {
  pokemonList: any[];

  constructor(
    private categorySvc: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param)=>{
        let id = param.get("id");
        this.categorySvc.getPokemonsDetailsOfType(id!!)
          .subscribe(
            {
              next: data => {this.pokemonList = data.pokemon}
            }
          )
      }
    )
  }

}
