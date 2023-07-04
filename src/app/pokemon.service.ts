import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonDetails(id: string|number): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getPokemonList(): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`)
  }
}
