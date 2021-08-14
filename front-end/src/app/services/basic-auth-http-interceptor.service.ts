import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtCommercialService } from './jwt-commercial.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService {

  constructor(private authenticationService: JwtCommercialService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(req);

  }
}
