import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userData: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: { username: string, password: string };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.user = this.userData.value;
    this.authService.signIn(this.user).subscribe({
      next: (response: any) => {
        if (response && response.user && response.user.isVerified) {
            this.router.navigate(['/']).then(() => window.location.reload());
        } else if (response.user && !response.user.isVerified) {
          this.router.navigate(['/authentication/emailverification']);
        } else {
          alert(response.msg);
        }
      }
    });
  }

}
