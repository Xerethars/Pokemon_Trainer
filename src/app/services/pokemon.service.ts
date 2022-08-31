import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';

const { pokemonAPI } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemon: Pokemon[] = [];
  private _loading: boolean = false;

  constructor(private http: HttpClient) { }

  get pokemon(): Pokemon[] {
    return this._pokemon;
  }

  get loading(): boolean{
    return this._loading;
  }

  set pokemon(pokemons: Pokemon[]) {
    this._pokemon = pokemons;
  }

  fetchPokemon(): void  { 
    if(!this.checkPokemonStorage()) {
      this._loading = true;
      this.http.get<PokemonResponse>(pokemonAPI)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
      .subscribe({
        next: (response: PokemonResponse) => {
          this._pokemon = this.getImageAndId(response.results); 
          localStorage.setItem("allPokemon", JSON.stringify(this._pokemon))               
        }
      })
    }
    
  }

  private checkPokemonStorage() {
    if(localStorage.getItem("allPokemon")) {
      this._pokemon = JSON.parse(localStorage.getItem("allPokemon") || "");
      return true;
    }
    return false;
  }

  private getImageAndId(pokemon: Pokemon[]): any {
    console.log("getImageand Id");
    
    pokemon.map((poke: Pokemon) => {
      const id = poke.url.split('/').filter(Boolean).pop();
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
      poke.id = id;
      poke.image = image;
      return poke;
    })
    return pokemon;

  }

}
