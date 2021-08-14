import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { JwtCommercialService } from './jwt-commercial.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
    private authService: JwtCommercialService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if ( this.authService.isUserLoggedIn()) {
        return true;
  
        this.router.navigate(['login-client']);
        return false;
      }
  
    }
}
