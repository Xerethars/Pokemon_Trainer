import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent implements OnInit {

  @Input() id: number = 0;
  @Input() isAdded: boolean | undefined;

  private URL: string = "";

  constructor() { }

  @Input() pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`    
  }

  public getUrl() {
    return this.URL;
  }

}
