import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated(): boolean | UrlTree {
    if(!this.authService.isLoggedIn()) {
      return this.router.parseUrl("/login");
    }
    return true;
  }

}
