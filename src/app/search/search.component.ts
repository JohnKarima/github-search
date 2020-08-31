import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserName } from '../UserName-class/user-name';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[DataService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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
      this.http.get<ApiResponse>(environment.apiURLmain+ environment.PAT).toPromise().then(response=>{
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



