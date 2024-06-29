import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { allUsers } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor( private us:UsersService  ){}

    // get the specific properties
  users!:allUsers  


  // use 2 way binding to get this later
  id = 3

  ngOnInit(): void {
    // get all posts
    this.us.getUser(this.id).subscribe({
      next:(response)=>  {this.users = response,console.log(response)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })


  }


}
