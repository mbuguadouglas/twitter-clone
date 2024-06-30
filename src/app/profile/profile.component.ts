import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ProfileComponent implements OnChanges, OnInit{

  constructor( private us:UsersService  ){}

    // get the specific properties
  users!:Array<allUsers>

  // use 2 way binding to get this later
  @Input() id:string = ''


  ngOnChanges(changes: SimpleChanges): void {
    if( changes['id']){
      this.getUser()
    }
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.us.getUsers().subscribe({
      next: (v) => {
        // console.log(`displaying userId: ${this.id}`)
        this.users = v.filter((x) => x.id === +this.id)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }


}
