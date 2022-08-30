import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { genRandomId } from 'src/app/utils/randomPokeId';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingPage implements OnInit {  

  public idArray: number[] | undefined;

  get username(): string | null {
    return this.authService.getUsername();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.idArray = genRandomId(3, 898);
  }

  public loginUser(username: string) {
    this.authService.login(username);
  }

}
