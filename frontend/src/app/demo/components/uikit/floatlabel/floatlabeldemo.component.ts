import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
  templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {
  countries: unknown[] = [];
  cities: unknown[];
  filteredCountries: unknown[] = [];
  value1: unknown;
  value2: unknown;
  value3: unknown;
  value4: unknown;
  value5: unknown;
  value6: unknown;
  value7: unknown;
  value8: unknown;
  value9: unknown;
  value10: unknown;
  value11: unknown;
  value12: unknown;

  constructor(private countryService: CountryService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit() {
    this.countryService.getCountries().then((countries) => {
      this.countries = countries;
    });
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  searchCountry(event: any) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i] as any;
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
