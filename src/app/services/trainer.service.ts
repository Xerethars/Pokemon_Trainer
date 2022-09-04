import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';

const { trainerAPI, APIKey } = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public loading: boolean = false;

  constructor(private http: HttpClient) { }


  public fetchTrainer(trainerId: string) {
    this.loading = true;
    return this.http.get(trainerAPI + "?username=" + trainerId)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }

  public postNewUser(username: string): void {
    this.http.post(trainerAPI, JSON.stringify({
      username: username,
      pokemon: [],
    }), {
      "headers": {
        'X-API-Key': APIKey,
        "Content-Type": "application/json"
      },
    }).subscribe();
  }

  public addPokemonToUser(trainer: Trainer, newPokemon: Pokemon) {
    this.loading = true;
    return this.http.patch<Trainer>(`${trainerAPI}/${trainer.id}`, {
      pokemon: [...trainer.pokemon, newPokemon.name]
    }, {
      "headers": {
        'X-API-Key': APIKey,
        "Content-Type": "application/json"
      },
    })
    .pipe(
      finalize(() => {
        this.loading = false;
      })
    );
  }

  public removePokemonFromUser(trainer: Trainer, removePokemon: Pokemon) {
    this.loading = true;
    return this.http.patch<Trainer>(`${trainerAPI}/${trainer.id}`, {
      pokemon: trainer.pokemon.filter((mon) => mon !== removePokemon.name)
    }, {
      "headers": {
        'X-API-Key': APIKey,
        "Content-Type": "application/json"
      },
    })
    .pipe(
      finalize(() => {
        this.loading = false;
      })
    );
  }

}
