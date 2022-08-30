import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { trainerAPI } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string | null = localStorage.getItem("username");

  constructor() { }

  public login(username: string) {
    this.username = username;
    localStorage.setItem("username", username);
    console.log(username);
  }

  public getUsername() {
    return this.username;
  }
}
