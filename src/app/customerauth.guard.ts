import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerauthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (JSON.parse(localStorage.getItem('loggedinuser')).role == 'CUSTOMER') {
      return true;
    } else {
      this.router.navigate(['page-content/notauthorised']);
      return false;
    }
  }
}
