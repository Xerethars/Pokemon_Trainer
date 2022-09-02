import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() { }

  @Input() pokemon: Pokemon[] | null = [];
  @Input() trainer: Trainer | undefined;
  @Input() fromTrainerPage: boolean| undefined;
  @Output() trainerChange = new EventEmitter<Trainer>()

  ngOnInit(): void {
  }

  

}
