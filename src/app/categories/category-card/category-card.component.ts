import { Component, Input, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/shared/pokemon-types.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() type:PokemonType = {id:"",name:"",imageUrl:""}

  constructor() { }

  ngOnInit(): void {
  }

}
