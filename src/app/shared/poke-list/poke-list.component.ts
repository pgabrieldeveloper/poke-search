import { Component, OnInit } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {Pokemons} from "../models/Pokemons";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  public pokemons : Array<Pokemons> = [];
  private setPokemons : Array<Pokemons> = []
  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe(res => {
      this.setPokemons = res.results;
      this.pokemons = this.setPokemons;
      console.log(this.pokemons);
    })
  }

  public getSearch(name:string){
    const pokemonsFiltrados = this.setPokemons.filter( pok => !pok.name.indexOf(name.toLowerCase()));
    console.log(name);
    this.pokemons = pokemonsFiltrados;
  }

}
