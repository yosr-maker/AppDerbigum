import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-commercial',
  templateUrl: './register-commercial.component.html',
  styleUrls: ['./register-commercial.component.css']
})
export class RegisterCommercialComponent implements OnInit {
  inscriptionForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              private router: Router, private toastr: ToastrService) {

}
ngOnInit() {
  this.resetForm();
}

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
    role: 'client',
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
  this.userService.postUser(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully', 'Client. Register');
    // this.resetForm(form);
    // this.serviceReclamation.refreshList();
    this.router.navigate(['/login']);
  });
}
}