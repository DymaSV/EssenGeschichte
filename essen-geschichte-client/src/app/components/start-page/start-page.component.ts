import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  start_button = 'Sign Up' || 'Sign In';

  log_in = true;
  ngOnInit() {}

  toggleButton() {
    this.start_button = this.log_in ? 'Sign Up' : 'Sign In';
  }

  toggleLogIn_LogUp() {
    this.log_in = !this.log_in;
    this.toggleButton();
  }
}
