import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allPosts } from '../../models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClient) { }
  private readonly baseUrl:string = 'https://jsonplaceholder.typicode.com/' 

  // methods to fetch comments from API
  getPosts(): Observable<allPosts>{
    return this,this.http.get<allPosts>(this.baseUrl+'posts')
  }

  // methods 1 comment from API
  getPost(x:number): Observable<allPosts>{
    return this.http.get<allPosts>(this.baseUrl+`posts/${x}`)
  }

}
