import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { CanActivate } from '@angular/router';
import {CanActivate, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {Headers, Http, Response} from '@angular/http';
import { JwtCommercialService } from '../services/jwt-commercial.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authentication: JwtCommercialService, private router: Router) {}

  // canActivate() {
  //   if (this.authentication.loggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['login']);
  //
  //     return false;
  //   }
  // }
  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log( JSON.parse(localStorage.getItem('currentUser')).username );
      // console.log(this.userService.getUserDetails());
      // console.log(this.userService.getUserDeatails().subscribe(data => {
      //   this.data = data;
      //   console.log(data);
      // }))
      return true;
    }
    // console.log(localStorage.getItem('currentUser'));
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
  private handelError(error: Response) {

    return Observable.throw(error.json().errors || 'server error');

  }
}
