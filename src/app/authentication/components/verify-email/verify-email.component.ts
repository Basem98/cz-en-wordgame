import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {
  verificationData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    token: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService, private router: Router) { }

  verify() {
    const verificationReqBody = this.verificationData.value;
    if (verificationReqBody.token) {
      this.authService.verifyUser(verificationReqBody).subscribe({
        next: (response) => {
          if (response && response.success) {
            alert('Congratulations! Your email has been verified! Now you can sign in and enjoy the game')
            this.router.navigate(['/authentication/signin']);
          } else {
            this.authService.reverifyUser(verificationReqBody.email).subscribe({
              next: (response) => {
                if (response && response.success) {
                  alert(`A verification email has been sent to ${verificationReqBody.email}`);
                }
              }
            });
          }
        }
      });
    } else {
      alert('Please complete at least the email field to recieve another token');
    }
  }
}
