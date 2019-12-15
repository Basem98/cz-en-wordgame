import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isValidUsername } from '../../validators/validateUsername';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../services/auth.service';
import { CountryService } from '../../../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userData: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, isValidUsername()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
  newUser: User;
  countriesList: Array<{}>;
  notClicked: boolean = true;

  constructor(private authService: AuthService, private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getCountriesNames();
  }

  async getCountriesNames(): Promise<any> {
    this.countriesList = await this.countryService.getCountriesList();
  }


  register() {
    this.notClicked = false;
    this.newUser = this.userData.value;
    this.authService.signUp(this.newUser).subscribe({
      next: (response: any) => {
      if (response && response.success) {
        this.router.navigate(['/authentication/signin']);
        alert(JSON.stringify(response.msg));
      } else {
        this.notClicked = true;
        alert(response.msg);
      }
    }
  });
  }

}
