import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient : HttpClient) { }

  get(url) {
    return this.httpClient.get(url);
  }

  post(url, body) {
    return this.httpClient.post(url, body)
  }

  put(url, body) {
    return this.httpClient.put(url, body);
  }

  delete(url) {
    console.log(url);
    return this.httpClient.delete(url);
  }
}
