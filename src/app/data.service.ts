import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`https://api.github.com/users?api_key=%${environment.PAT}&limit=50`)
  }


  
}

// return this.http.get(`https://api.github.com/users?api_key=%${environment.PAT}&limit=50`)
// }

// https://api.giphy.com/v1/gifs/trending?api_key=%${environment.giphyApiKey}&limit=50