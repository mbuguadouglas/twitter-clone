import { Component, OnInit } from '@angular/core';
import { allUsers } from '../models/users';
import { UsersService } from '../services/users/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private us:UsersService) {}

  users:Array<allUsers> = []

  ngOnInit(): void {
    // get all posts
    this.us.getUsers().subscribe({
      next:(response)=>  {this.users = response,console.log(response)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
}

}
