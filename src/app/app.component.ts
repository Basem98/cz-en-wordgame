import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'czWordGame';
  loggedIn: boolean = this.authService.isLoggedIn();

  constructor(private authService: AuthService) { }

}
