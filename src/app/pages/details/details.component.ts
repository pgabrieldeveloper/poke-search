import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokeApiService} from "../../service/poke-api.service";
import {forkJoin,} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon:any;
  public loading: boolean = false;
  public haveError: boolean = false;

  constructor(
    private activeRouter: ActivatedRoute,
    private pokemonService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemom;
  }

  get getPokemom () {
    const id = this.activeRouter.snapshot.params['id'];
    const pokemons = this.pokemonService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokemonService.apiGetPokemons(`${this.urlName}/${id}`);
    return forkJoin([pokemons, name]).subscribe({next: res => {
        this.pokemon = res
        this.loading = true;
        return;
      }, error: err => {
        this.haveError = true;
        return;
      }})

  }

}
