import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(http: HttpClient) {
    'http://localhost:4200/'
  }
}
