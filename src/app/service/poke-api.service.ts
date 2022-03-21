import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {PokemonResults} from "../shared/models/pokemonResults";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url:string = 'https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0';

  constructor(private http:HttpClient) { }

  get apiListAllPokemon():Observable<PokemonResults> {
    return this.http.get<PokemonResults>(this.url).pipe(
      tap( res => {
          res.results.map((pokemon) => {
            this.apiGetPokemons(pokemon.url).subscribe({next: res => pokemon.status = res, error: error => console.log(error)})
          })
      }),
    );
  }
  public apiGetPokemons(url:string): Observable<any> {
    return this.http.get<any>(url).pipe(
      res => res,
      error => error,
    );
  }
}
