import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from './trainer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string | null = localStorage.getItem("username");

  get loading(): boolean {
    return this.trainerService.loading;
  }

  constructor(private trainerService: TrainerService, private router: Router) { }

  public login(username: string): void {
    this.trainerService.fetchTrainer(username)
      .subscribe({
        next: (data) => {
          const userArray = data as Array<Object>

          this.username = username;
          localStorage.setItem("username", username);

          this.router.navigate(["/trainer"]);

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

  public isLoggedIn(): boolean {
    return (this.getUsername() !== null && this.getUsername() !== "");
  }
}

