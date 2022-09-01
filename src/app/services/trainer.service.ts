import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

const { trainerAPI, APIKey } = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  public fetchTrainer(trainerId: string) {
    this.loading = true;
    return this.http.get(trainerAPI +"?username="+ trainerId)
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
      "headers" : {
        'X-API-Key' : APIKey,
        "Content-Type" : "application/json"
      },
    }).subscribe();
  }

}
