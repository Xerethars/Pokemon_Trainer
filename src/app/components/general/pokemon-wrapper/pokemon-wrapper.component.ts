import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.css']
})
export class PokemonWrapperComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;
  @Input() trainer: Trainer | undefined;
  @Input() fromTrainerPage: boolean | undefined;
  @Output() trainerChange = new EventEmitter<Trainer>();

  public isAdded: boolean = false;
  public isRemoved: boolean = false;
  constructor(private readonly trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  public onPokemonAddClick($event: MouseEvent) { 
    if (this.pokemon?.caught === false && this.fromTrainerPage === false) {
      this.isAdded = true;
      if (this.trainer !== undefined && this.pokemon !== undefined) {
        this.pokemon.caught = true;
        this.trainerService.addPokemonToUser(this.trainer, this.pokemon)
          .subscribe({
            next: (response: Trainer) => {
              this.trainerChange.emit(response)          
            },
            error: (err) => {
              console.log(err.message);
              
            }
          })
      }
    }
    else {
      if(this.fromTrainerPage === true){
        this.isAdded = false;
        if (this.trainer !== undefined && this.pokemon !== undefined) {
          this.isRemoved = true;
          this.pokemon.caught = false;
          this.trainerService.removePokemonFromUser(this.trainer, this.pokemon)
            .subscribe({
              next: ((response: Trainer) => {
                this.trainerChange.emit(response)
              })
            })
        }
      }     
    }
  }
}
