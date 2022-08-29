import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';

const URL = "https://ml-noroff-assignment.herokuapp.com/trainers";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  public fetchTrainer(trainerId: number): void {
    this.http.get(URL+"/"+ trainerId)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe((response => {
         
      }))
  }
}
