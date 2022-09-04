import { Component, Input, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage implements OnInit {

  public error: string = "";

  constructor(private pokemonService: PokemonService, private trainerService: TrainerService) {}

  public username: string = localStorage.getItem("username") || "";
  
  public fromTrainerPage: boolean = true;
  public trainer: Trainer = {
    id: 1,
    username: "",
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
  

  getCaughtPokemon(pokemon: Pokemon[], trainer: Trainer): Pokemon[] {
    return pokemon.filter((poke) => {
      return trainer.pokemon.indexOf(poke.name) != -1
    });
  };

  get pokemon(): Pokemon[] {    
    return this.getCaughtPokemon(this.pokemonService.pokemon, this.trainer);
  }

  get loading(): boolean {
    return this.pokemonService.loading;
  }


  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
    this.getTrainer(this.username);
    
  }
}

