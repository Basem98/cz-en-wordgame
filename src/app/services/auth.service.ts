import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url: string = 'http://localhost:5000';
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  signUp(newUser: User): Observable<any> {
    return this.http.post('/signup', newUser);
  }

  signIn(userData: { username: string, password: string }): Observable<any> {
    return this.http.post('/signin', userData).pipe(map((response: any) => {
      if (response && response.success) {
        sessionStorage.setItem('JWT', response.token);
        sessionStorage.setItem('currentUser', JSON.stringify(response.user));
        return response;
      } else {
        return response;
      }
    }));
  }

  verifyUser(verificationData: { email: string, token: string }): Observable<any> {
    return this.http.post('/confirmverification', verificationData).pipe(map((response: any) => {
      if (response && response.success) {
        console.log('Response has a successfil property that is true')
        sessionStorage.removeItem('currentUser');
        sessionStorage.setItem('currentUser', JSON.stringify(response.user));
        return response;
      } else {
        alert(`The token you've entered is either wrong or has expired. Another verification token has been sent to ${verificationData.email}`);
      }
    }))
  }

  reverifyUser(verificationEmail: string): Observable<any> {
    console.log('I am reverifying');
    return this.http.post('/resendverification', {email: verificationEmail});
  }

  signOut() {
    sessionStorage.clear();
    if (!sessionStorage.getItem('JWT') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/authentication/signin']).then(() => window.location.reload());
    }
  }

  isLoggedIn() {
    if (
      sessionStorage.getItem('JWT')
      && sessionStorage.getItem('currentUser')
    ) {
      return this.loggedIn.getValue()
    } else {
      sessionStorage.clear();
      this.loggedIn.next(false);
      return this.loggedIn.getValue()
    }
  }

}