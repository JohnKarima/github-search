import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe(users => {
        console.log(users)
        this.users = users
        //console.log(this.users)
      })
  }

}


// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
//   users: any[] = [];

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getUsers()
//       .subscribe((response: any) => {
//         console.log("Data", response)
//         this.users = response.data
//         //console.log(this.users)
//       })
//   }

// }
