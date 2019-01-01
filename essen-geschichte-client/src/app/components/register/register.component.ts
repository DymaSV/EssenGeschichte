import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

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
  fun_status = [
    ['Single', '../../../assets/img/single.png'],
    ['I am a wife', '../../../assets/img/wife.png'],
    ['I am a strongman', '../../../assets/img/strongman.png'],
    ['I am husband', '../../../assets/img/husband.png']
  ];
  registerForm = this.fb.group({
    email: [''],
    password: [''],
    name: [''],
    surname: [''],
    age: [''],
    hobbies: [''],
    status: ['']
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
