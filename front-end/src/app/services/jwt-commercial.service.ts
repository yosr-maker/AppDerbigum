import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs'
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import { User } from '../entity/user';
import { map } from 'rxjs/operators';
import {tokenNotExpired} from 'angular2-jwt';



export class JwtResponse{
  constructor(
    public jwttoken: string,
  ) {}
  }
@Injectable({
  providedIn: 'root'
})
export class JwtCommercialService {
  request: any;
  public token: string;
  readonly rootURL = 'http://localhost:8090';
  constructor(private http: HttpClient, private http2: Http) { }
  public generateToken(request){
    return this.http.post('http://localhost:8090/authenticate-client', request, {responseType: 'text' as 'json'});
  }
  public welcome(token){
    const tokenStr = 'Bearer' + token;
    const headers = new HttpHeaders().set('Authorisation', tokenStr);
    return this.http.get('http://localhost:8090', {headers, responseType: 'text' as 'json'});
  }
  login(username: string , password: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post('http://localhost:8090/authenticate-client', { headers, responseType: 'text' as 'json'});
  }

  getUsers() {
    const  username = 'javatechie';
    const password = 'jt143';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return  this.http.get('http://localhost:8090/authenticate-client', { headers});
  }
  authenticate2(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('http://localhost:8090/authenticate-client', { headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          return userData;
        }
      )

    );
  }
  authenticate(username, password) {
    return this.http.post<any>('http://localhost:8090/authenticate-client', { username, password}).pipe(
      map(
        userData => {
          // const token = userData.json() && userData.json().token;
          // this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: userData.token}));
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )

    );
  }

  authenticateAdmin(username, password) {
    return this.http.post<any>('http://localhost:8090/authenticate-admin', { username, password}).pipe(
      map(
        userData => {
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: userData.token}));
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          // this.token = JSON.stringify(userData.token);
          // const token1 = userData.headers.get('token').token;
          // console.log(token1);
          console.log(localStorage.getItem('token'));
          return userData;
        }
      )

    );
  }

  isUserLoggedIn( )  {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  // logOut() {
  //   sessionStorage.removeItem('username');
  // }
  logOut() {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

 
  private handelError(error: Response) {

    return Observable.throw(error.json().errors || 'server error');

  }
  
}
