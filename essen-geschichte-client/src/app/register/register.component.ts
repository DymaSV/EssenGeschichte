import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService
  ) {}
  errorMessage = '';
  successMessage = '';
  registerForm = this.fb.group({
    email: [''],
    password: ['']
  });
  ngOnInit() {}
  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }
}
