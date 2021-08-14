import { User } from './../entity/user';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtCommercialService } from './jwt-commercial.service';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  list: User[];
  
  readonly rootURL = 'http://localhost:8090';
  readonly rootURL2 = 'http://localhost:8090';
  data = [];

  constructor( private http: HttpClient, private http2: Http, private loginService: JwtCommercialService ) { }
  baseUrl = "http://localhost:8090";
  postUser(formData: User) {
    return this.http.post(this.rootURL2 + '/register-client', formData);

  }
  postAdmin(formData: User) {
    return this.http.post(this.rootURL2 + '/register-admin', formData);

  }


  private handelError(error: Response) {

    return Observable.throw(error.json().errors || 'server error');

  }
  register(user:User): Observable<any> {
    let uri="register";
    return this.http.post<any[]>(this.baseUrl+uri,user);
  }
}
