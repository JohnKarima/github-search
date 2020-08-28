import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';



@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.css']
})
export class GhSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): {
    interface ApiResponse{
      user: string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=" c40b7197f3a936f7c0342ff0df3bd97c7b836c9f).subscribe(data=>{
      this.user = new User(data.user)
    })
    
  }

}
