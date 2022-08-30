import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent implements OnInit {

  @Input() id: number = 0;

  private URL: string = "";

  constructor() { }

  ngOnInit(): void {
    this.URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    console.log(this.URL);
    
  }

  public getUrl() {
    return this.URL;
  }

}
