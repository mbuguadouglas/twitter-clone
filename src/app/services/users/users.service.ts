import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allUsers } from '../../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor( private http:HttpClient) { }
  private readonly baseUrl:string = 'https://jsonplaceholder.typicode.com/' 

  // methods to fetch comments from API
  getUsers(): Observable<allUsers>{
    // first get all users. latr get one specifc with id
    return this.http.get<allUsers>(this.baseUrl+'users')
  }

  // methods 1 comment from API
  getUser(x:number): Observable<allUsers>{
    return this.http.get<allUsers>(this.baseUrl+`users/${x}`)
  }

}
