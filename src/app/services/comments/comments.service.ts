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
  getComments(): Observable<allComments>{
    return this.http.get<allComments>(this.baseUrl+'comments')
  }

  // methods 1 comment from API
  getComment(x:number): Observable<allComments>{
    return this.http.get<allComments>(this.baseUrl+`comments/${x}`)
  }


}
