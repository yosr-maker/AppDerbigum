import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtCommercialService } from 'src/app/services/jwt-commercial.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  constructor(private router: Router,
    private loginservice: JwtCommercialService, private toastr: ToastrService) { }
    
    checkLogin() {
      (this.loginservice.authenticateAdmin(this.username, this.password).subscribe(
          data => {
            this.router.navigate(['/user-admin']);
            this.invalidLogin = false;
          },
          error => {
            this.invalidLogin = true;
            this.toastr.success('Please insert correct record', 'Admin. Login');
  
  
          }
        )
      );
  
    }
  ngOnInit(): void {
  }

}
