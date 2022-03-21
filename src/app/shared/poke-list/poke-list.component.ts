import {Component, EventEmitter, OnInit} from '@angular/core';
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
  public loading : boolean = false;
  public haveError: boolean = false;
  constructor(private pokeApiService: PokeApiService) { }
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe({ next:res => {
      this.setPokemons = res.results;
      this.pokemons = this.setPokemons;
      this.loading = true;
      return;
    }, error:err => {
      this.haveError = true;
      return;
      }})
  }


  public getSearch(name:string){
    const pokemonsFiltrados = this.setPokemons.filter( pok => !pok.name.indexOf(name.toLowerCase()));
    this.pokemons = pokemonsFiltrados;
  }

}
