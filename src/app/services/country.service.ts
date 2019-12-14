import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }

  getCountryCode(countryName) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`).pipe(map((countryInfo) => {
      return countryInfo[0]['alpha2Code'];
    })).toPromise();
  }

  getCountriesList() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(map((countriesList: any) => {
      const countriesNames = countriesList.map((country) => {
        return country.name;
      });
      return countriesNames;
    })).toPromise();
  }
}
