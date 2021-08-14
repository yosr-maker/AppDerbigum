import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtCommercialService } from 'src/app/services/jwt-commercial.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: JwtCommercialService, private router: Router) { }

  ngOnInit(): void {
  }
  hasAuthToken() {
    return localStorage.getItem('currentUser') !== null;
  }
  // hasAuthToken1() {
  //   if ( localStorage.getItem('currentUser') !== null ) {
  //     // return this.id = localStorage.getItem('currentUser');
  //     // console.log('Acter Change', JSON.parse(JSON.stringify(this.getUser())));
  //   }
  // }
  logout() {
    this.service.logOut();
    this.router.navigate(['']);
  }
}

