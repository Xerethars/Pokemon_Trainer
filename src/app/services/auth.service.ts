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

  public login(username: string) {
    this.username = username;
    localStorage.setItem("username", username);
  }

  public getUsername() {
    return this.username;
  }
}

