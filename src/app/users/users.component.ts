import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserName } from '../UserName-class/user-name';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: UserName;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.DataServiceRequest()
    this.userName = this.dataService.userName
    console.log(this.userName)
  }
}