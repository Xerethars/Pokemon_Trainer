import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.css']
})
export class CatalogPage implements OnInit {

  public error: string = "";
  public offset: number = 0;
  public fromTrainerPage: boolean = false;
  public username: string = localStorage.getItem("username") || "";
  public trainer: Trainer = {
    id: 1,
    username: "ash",
    pokemon: [],
  };


  public getTrainer(username: string): void {
    this.trainerService.fetchTrainer(username)
      .subscribe({
        next: (trainerResponse) => {
          const userArray = trainerResponse as Array<Object>
          this.trainer = userArray[0] as Trainer;
        }
      })
  }

  constructor(private pokemonService: PokemonService, private trainerService: TrainerService) {}

  get pokemon(): Pokemon[] {
    return this.setCaughtPokemon(this.pokemonService.pokemon, this.trainer).slice(this.offset, this.offset+40);
  }

  onNextPokemonClick() {
    this.offset += 40;
  }

  get loading(): boolean {
    return this.pokemonService.loading;
  }

  setCaughtPokemon(pokemon: Pokemon[], trainer: Trainer): Pokemon[] {
    return pokemon.map((poke) => {
      if(trainer.pokemon.indexOf(poke.name) != -1) {
        poke.caught = true;
      }
      else {
        poke.caught = false;
      }
      return poke;
    })
    
  };

  ngOnInit(): void {
    this.getTrainer(this.username)
    this.pokemonService.fetchPokemon();
  }

}
