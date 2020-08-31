import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { UsersearchService } from '../usersearch.service'
import { UserName } from '../UserName-class/user-name';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [UsersearchService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  userName: UserName;
  login: string

  constructor(private UsersearchService: UsersearchService) { }

  findProfile() {
    this.UsersearchService.updateProfile(this.userName)
    this.UsersearchService.profileRequest()
    this.userName = this.UsersearchService.userName
    //form.resetForm
    console.log(this.login)
  }
  ngOnInit(): void {
  }
}
