import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtCommercialService } from 'src/app/services/jwt-commercial.service';

@Component({
  selector: 'app-login-commercial',
  templateUrl: './login-commercial.component.html',
  styleUrls: ['./login-commercial.component.css']
})
export class LoginCommercialComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: JwtCommercialService, private toastr: ToastrService) { }

    checkLogin() {
      (this.loginservice.authenticate(this.username, this.password).subscribe(
          data => {
            this.router.navigate(['/']);
            this.invalidLogin = false;
          },
          error => {
            this.invalidLogin = true;
            this.toastr.success('Please insert correct record', 'Client.Login');
  
          }
        )
      );
  
    }
  ngOnInit(): void {
  }

}
