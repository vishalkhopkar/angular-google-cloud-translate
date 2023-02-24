import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface GoogleObj {
  q: string;
  target: string;
}

@Injectable({
  providedIn: 'root'
})

export class GoogletranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2?key=xxxx';

  key = '';
  constructor(private http: HttpClient) { }

  translate(obj: GoogleObj) {
    return this.http.post(this.url, obj);
  }
}