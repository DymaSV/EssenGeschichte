import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}
  errorMessage = '';
  successMessage = '';
  model: any = {};
  loading = false;
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  ngOnInit() {}
  tryLogin(value) {
    this.loading = true;

    this.authService.doLogin(value).then(
      res => {
        if (res) {
          this.router.navigateByUrl('/user');
        }
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your are In!!!';
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }
}
