import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { CommentsService } from '../services/comments/comments.service';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

    constructor( 
      private posts:PostsService,
      private comments:CommentsService,
      private users:UsersService
    ){}

    // hardcode the id
    id = 3

    // get the specific properties
    name = ''
    username = ''
    website = ''
    city = ''
    catchPhrase = ''

    // use 2 way binding to get this later
    postOf= ''
    postId= ''
    postTitle= ''
    postBody  = '' 

    // comments
    commentOf = ''
    commentId = ''
    commentName = ''
    commentEmail = ''
    commentBody = ''

    ngOnInit(): void {
      // get all posts
    //   this.posts.getPosts().subscribe({
    //     next: (v) => console.log(v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete') 
    // })

      // get all comments
    //   this.comments.getComments().subscribe({
    //     next: (v) => console.log(v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete')
    //   })

    // get one post
    //   this.posts.getPost(this.id).subscribe({
    //     next: (v) => console.log(v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete') 
    // })

    // // get one comment
    // this.comments.getComment(this.id).subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete')
    // })

    this.posts.getPost(this.id).subscribe((response: any) => {
      const { userId, id, title, body } = response
      this.postOf = userId
      this.postId = id
      this.postTitle = title
      this.postBody = body
    })

    this.comments.getComment(this.id).subscribe((response: any) => {
      const { postId, id,name,email, body } = response
      this.commentOf = postId
      this.commentId = id
      this.commentName = name
      this.commentEmail = email
      this.commentBody = body
    })

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
