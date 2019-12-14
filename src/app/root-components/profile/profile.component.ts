import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imgLink: string;
  countryCode: string;
  currentUser: User = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(
    private countryService: CountryService
    ) { }

  ngOnInit() {
    this.getCountryFlag();
  }

  async getCountryFlag() {
    this.countryCode = await this.countryService.getCountryCode(this.currentUser.country.toLowerCase());
    if (this.countryCode) {
      this.imgLink = `https://www.countryflags.io/${this.countryCode}/shiny/32.png`;
    }
  }

}
