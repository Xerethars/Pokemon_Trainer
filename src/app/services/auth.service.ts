import { Injectable } from '@angular/core';
import { TrainerService } from './trainer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string | null = localStorage.getItem("username");

  get loading(): boolean {
    return this.trainerService.loading;
  }

  constructor(private trainerService: TrainerService) { }

  public login(username: string): void {
    this.trainerService.fetchTrainer(username)
      .subscribe({
        next: (data) => {
          const userArray = data as Array<Object>

          this.username = username;
          localStorage.setItem("username", username);

          if(userArray.length < 1) this.trainerService.postNewUser(username); 
        },
        error: (err) => {
          alert("Something went wrong: " + err);
        }
      });
  }

  public getUsername(): string | null {
    return this.username;
  }
}

