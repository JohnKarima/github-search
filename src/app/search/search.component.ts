import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // search(searchTerm: string) {
  //   if (searchTerm !== '') {
  //     this.dataService.searchUsers(searchTerm)
  //     .subscribe(response => {
  //       console.log('Search Data', response)
  //       //this.users = users
  //       //console.log(this.users)
  //     })
  //   }
  // }

}
