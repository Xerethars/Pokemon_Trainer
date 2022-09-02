import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public getPath() {
    const path = this.router.url;

    return path.substring(1).toUpperCase();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string | null {
    return this.authService.getUsername();
  }

}
