import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  inscriptionForm: FormGroup;
  loginAfterRegister: AuthentificationComponent;

  constructor(private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(){ this.resetForm();}  
  
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm(); }
    this.userService.formData = {
      id: null,
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      cin: '',
      email: '',
      role: 'ADMIN',
      phoneNumber : ''
    };
  }
  onSubmit(form: NgForm) {
    // if (form.value.EmployeeID != null) {
    //   this.updateRecord(form);
    // } else {
    this.insertRecord(form);
    // }
  }
  insertRecord(form: NgForm) {
    this.userService.postAdmin(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Admin. Register');
      // this.toastr.success('Inserted successfully', 'EMP. Register');
      // this.resetForm(form);
      // this.serviceReclamation.refreshList();
      this.router.navigate(['/login']);
      // this.loginAfterRegister.router.navigate(['admin'], { relativeTo: this.loginAfterRegister.route });
    });
  }
}
