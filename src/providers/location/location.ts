import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocationProvider Provider');
  }

  GetMovieData():Observable<any>{
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCIQUtsxrHdiLB7lMmFg8CyujswylqhbCQ');
  }

}
