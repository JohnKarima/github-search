import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserName } from './UserName-class/user-name';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName: UserName//[]  = [];

  constructor(private http: HttpClient) {
    this.userName = new UserName("", "", "", "", "", 0, new Date);
  }

  DataServiceRequest() {
    interface ApiResponse {
      userName: string;
      following: string;
      followers: string,
      login: string,
      avatar_url: string,
      public_repos: number,
      created_at: Date,
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiURLjohn + environment.PAT).toPromise().then(response => {
        this.userName.userName = response.userName
        this.userName.following = response.following
        this.userName.followers = response.followers
        this.userName.login = response.login
        this.userName.avatar_url = response.avatar_url
        this.userName.public_repos = response.public_repos;
        this.userName.created_at = response.created_at

        resolve()
        console.log(response)
      },
        error => {
          console.log("error")

          reject(error)
        })
    })
    return promise

  }
  updateProfile(userName) {
    this.userName = userName
  }
}