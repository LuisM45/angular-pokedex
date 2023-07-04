import { Injectable } from '@angular/core';
import { PokemonType } from './shared/pokemon-types.interface';
import { Observable } from 'rxjs/internal/Observable';
import { delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  categories = [
    {​​
      id: '1',
      name: 'Normal',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=normal',
    }​​,
    {​​
      id: '2',
      name: 'Fighting',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=fighting',
    }​​,
    {​​
      id: '3',
      name: 'Flying',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=flying',
    }​​,
    {​​
      id: '4',
      name: 'Poison',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=poison',
    }​​,
  ];
 
  getTypes():Observable<any>{
    return this.http.get(`${environment.pokedexBaseUrl}type/`)
  }

  getPokemonsDetailsOfType(typeId:number|string):Observable<any>{
    return this.http.get(`${environment.pokedexBaseUrl}type/${typeId}`)
  }
}
