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

  constructor(private pokemonService: PokemonService) {}

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon;
  }

  get loading(): boolean {
    return this.pokemonService.loading;
  }


  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }
}
