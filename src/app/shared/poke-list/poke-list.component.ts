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
  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe(res => {
      this.pokemons = res.results;
      console.log(this.pokemons);
    })
  }

}
