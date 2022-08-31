import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';

const { trainerAPI } = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  public fetchTrainer(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${trainerAPI}?username=${username}`)
      .pipe(
        map((trainer: Trainer[]) => trainer.pop())
      )
  }

}
