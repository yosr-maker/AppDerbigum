import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.css']
})
export class RegisterLayoutComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public authenticationService: AuthentificationService,
    private router: Router, public route: ActivatedRoute, private toastr: ToastrService) { }

 

ngOnInit(): void {
this.router.navigate(['client'], { relativeTo: this.route });
}
ShowRegisterClient() {
this.router.navigate(['client'], { relativeTo: this.route });
}
ShowRegisterAdmin() {
this.router.navigate(['admin'], { relativeTo: this.route });
}
}