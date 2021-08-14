import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../services/authentification.service';
import { JwtCommercialService } from '../services/jwt-commercial.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthentificationService,
    public router: Router, public route: ActivatedRoute
  ) {
    // this.loginForm = formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  ngOnInit() {
    // this.authenticationService.logout();
    this.router.navigate(['client'], { relativeTo: this.route });
  }


  
  ShowLoginClient() {
    this.router.navigate(['client'], { relativeTo: this.route });
  }
  ShowLoginAdmin() {
    this.router.navigate(['admin'], { relativeTo: this.route });
  }


}
