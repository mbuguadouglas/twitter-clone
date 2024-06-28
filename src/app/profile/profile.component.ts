import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { allUsers } from '../models/users';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor( private users:UsersService  ){}

    // get the specific properties
  name = ''
  username = ''
  website = ''
  city = ''
  catchPhrase = ''


  // use 2 way binding to get this later
  id = 3

  ngOnInit(): void {
  //   // get all posts
  //   this.users.getUsers().subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => console.error(e),
  //     complete: () => console.info('complete') 
  // })

  // get one user
  this.users.getUser(this.id).subscribe((response: any) => {
    const { id, name, username, address, website,  } = response;
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
    this.city = address.city;
    // console.log(this.id, this.name, this.username, this.website, this.city)
    // console.log(this.id,this.city)
  });
  }


}
