import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class IconService {
  constructor(private http: HttpClient) {}
  /* eslint-disable @typescript-eslint/no-explicit-any */
  icons!: any[];
  selectedIcon: any;
  apiUrl = 'assets/demo/data/icons.json';

  getIcons() {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        this.icons = response.icons;
        return this.icons;
      }),
    );
  }
}
