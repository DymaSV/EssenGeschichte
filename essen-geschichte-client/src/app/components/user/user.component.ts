import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: any;
  errorMessage = '';
  successMessage = '';
  constructor(public authService: AuthServiceService, private router: Router) {
   this.name = authService;
  }
  tryLogout() {
    this.authService.doLogout().then(
      res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your are Out!!!';
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }
  ngOnInit() {}
}
