import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent{
  verificationToken: string;
  userEmail: string;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  onVerify() {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.verificationToken = params['token'];
      }
    });
    const verificationData = {
      email: this.userEmail,
      token: this.verificationToken
    };
    this.authService.verifyUser(verificationData).subscribe({
      next: response => {
        if (response && response.success) {
          this.router.navigate(['/authentication/signin']);
        } else {
          alert('Either the token has expired or something went wrong. Please click on resend verification mail to recieve a new token');
        }
      }
    })
  }

  onReverify() {
    this.authService.reverifyUser(this.userEmail).subscribe({
      next: response => {
        if (response && response.success) {
          alert(`Another verification mail has been sent to ${this.userEmail}`);
          this.router.navigate(['/authentication/signin']);
        } else {
          alert(response.msg);
        }
      }
    });
  }



}
