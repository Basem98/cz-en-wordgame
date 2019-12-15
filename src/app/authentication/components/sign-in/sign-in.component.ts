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
          alert(
            'This account is not verified yet. If you recieved a verification email, click on the link in it and verify your account before signing in.'
            + 'If you did not, click on this link https://czenwordgame1.herokuapp.com/authentication/verify/1 and write down your email and click on Resend Verification Mail'
            );
        } else {
          alert(response.msg);
        }
      }
    });
  }

}
