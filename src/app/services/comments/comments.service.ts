import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allComments } from '../../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private http:HttpClient) { }
  private readonly baseUrl:string = 'https://jsonplaceholder.typicode.com/' 

  // methods to fetch comments from API
  getComments(): Observable<Array<allComments>>{
    return this.http.get<Array<allComments>>(this.baseUrl+'comments')
  }

}
