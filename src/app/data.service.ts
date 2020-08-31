import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserName } from './UserName-class/user-name';
import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName: UserName//[]  = [];

  constructor(private http: HttpClient) { 
    this.userName = new UserName("","","","","",0);
  }
  

  DataServiceRequest(){
    interface ApiResponse{
      userName:string;
      following:string;
      followers:string,
      login:string,
      avatar_url: string,
      public_repos: number,



    }
    let promise = new Promise((resolve,reject)=>{
      //this.userName = [];
      this.http.get<ApiResponse>(environment.apiURL+ environment.PAT).toPromise().then(response=>{
        this.userName.userName = response.userName
        this.userName.following = response.following
        this.userName.followers = response.followers
        this.userName.login = response.login
        this.userName.avatar_url = response.avatar_url
        this.userName.public_repos = response.public_repos;
        //this.userName.push(response);

        resolve()
        console.log(response)

        
      },
      error=>{
        console.log("error")

        reject(error)
      })
    })
    return promise
    
  }
}








// export class DataService {
//   userName: any;

//   constructor(private http: HttpClient) { }

//   getUsers(){
//     return this.http.get(`https://api.github.com/users?api_key=%${environment.PAT}&limit=50`)
//   }

//   searchUsers(username: string){
//     return this.http.get(`https://api.github.com/search?q=${this.userName}&api_key=%${environment.PAT}&limit=50`)
//   }


  
// }