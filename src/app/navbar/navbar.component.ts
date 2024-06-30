import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private us:UsersService ) {}

  users:Array<allUsers> = []
  
  // // user to get the id
  // id!: string
  // selectedUser(event:Event):void{
    //   const selectedElement = event.target as HTMLSelectElement
    //   this.id = selectedElement.value //pass the properties into it
    //   console.log(this.id)
    // }
    
    // HOW WOULD THIS WORK?!?!
    id:string = ''
  @Output() selectedId:EventEmitter<string> = new EventEmitter()

  // user to get the id
  selectedUser(event:Event):void{
    const selectedElement = event.target as HTMLSelectElement
    this.id =  selectedElement.value //pass the properties into it
    this.selectedId.emit(this.id)
  }
  
  ngOnInit(): void {
    // console.log(this.selectedId)
    // get all posts
    this.us.getUsers().subscribe({
      next:(response)=>  {this.users = response} 
  })
}



}
