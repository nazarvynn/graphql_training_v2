import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  /* eslint-disable @typescript-eslint/no-explicit-any */

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get<any>('assets/demo/data/scheduleevents.json')
      .toPromise()
      .then((res) => res.data as any[])
      .then((data) => data);
  }
}
