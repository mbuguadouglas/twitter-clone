import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { CommentsService } from '../services/comments/comments.service';
import { UsersService } from '../services/users/users.service';
import { allPosts } from '../models/posts';
import { allComments } from '../models/comments';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

    constructor( 
      private ps:PostsService,
      private cs:CommentsService,
      private users:UsersService
    ){}

    // alllows properties to be set by parent
    @Input() commentIdChild:string = ''
    @Input() id:string = ''

    posts:Array<allPosts> = []
    comments:Array<allComments> = []

    ngOnInit(): void {
      console.log(this.commentIdChild)
      // get all posts
      this.ps.getPosts().subscribe({
        next: (v) => {
          console.log(v),
          this.posts = v.filter((x)=>x.userId === +this.commentIdChild) },
        // error: (e) => console.error(e),
        // complete: () => console.info('complete') 
    })

      // get all comments
      this.cs.getComments().subscribe({
        next: (v) => {console.log(v),this.comments = v},
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })


    //   // get one user
    // this.users.getUser(+this.id).subscribe((response: any) => {
    //   const { id, name, username, address, website,  } = response;
    //   this.id = id;
    //   this.name = name;
    //   this.username = username;
    //   this.website = website;
    //   this.city = address.city;
    //   // console.log(this.id, this.name, this.username, this.website, this.city)
    //   // console.log(this.id,this.city)
    // });
    }

  


}
