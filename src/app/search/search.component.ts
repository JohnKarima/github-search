import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

import { UserName } from '../UserName-class/user-name';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[DataService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  userName: UserName;
  //userName: string

  constructor(private Dataservice:DataService) {
    findProfile(){
      this.Dataservice.updateProfile(this.userName)
      this.Dataservice.DataServiceRequest()
      this.userName=this.Dataservice.userName
    }
    
  }
  ngOnInit(): void {
      
  }
}



