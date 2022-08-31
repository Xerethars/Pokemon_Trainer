import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.css']
})
export class PokemonWrapperComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
