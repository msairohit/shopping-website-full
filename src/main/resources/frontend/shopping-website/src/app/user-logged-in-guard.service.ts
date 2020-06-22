import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInGuardService implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("entering");
    console.log(this.localStorageService.isUserLoggedIn());
    if (this.localStorageService.isUserLoggedIn() == "true") {
      console.log("valid user");
      return true;
    } else {
      alert("You don't have permission to view this page");
      this.router.navigate(['testLogin']);
      return false;
    }
  }
}
