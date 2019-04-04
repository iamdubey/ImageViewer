import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = 'https://api.unsplash.com/';
  accessKey:string = "b0e0fa9726ff8806c2b44996d20051f24caadc879a730daa0df3dc987375520c";
  constructor(private http: HttpClient) { }

  getImages(query, pageNo) {
    return this.http.get(this.baseUrl + 'search/photos?query=' +query + '&page='+pageNo+'&per_page=10&client_id='+ this.accessKey);
  }
  getUserData(uname){
    return this.http.get(this.baseUrl + 'users/'+ uname +'/photos?client_id='+ this.accessKey)
  }

}
