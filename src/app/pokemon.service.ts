import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonDetails(id: string|number): Observable<any>{
    return this.http.get(`${environment.pokedexBaseUrl}pokemon/${id}`)
  }

  getPokemonList(): Observable<any>{
    return this.http.get(`${environment.pokedexBaseUrl}pokemon`)
  }
}
