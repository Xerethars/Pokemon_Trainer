import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { trainerAPI } = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  public fetchTrainer(trainerId: number) {
    this.loading = true;
    return this.http.get(URL+"/"+ trainerId)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }

  public checkIfTrainerExists(username): boolean {
    this.fetchTrainer(username).subscribe({
      next: () => {

      }
    });
    return true;
  }

}
