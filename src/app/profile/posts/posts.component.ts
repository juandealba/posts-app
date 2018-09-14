import { Component, OnInit } from '@angular/core';
import { User, Post } from '../../common/data-model';
import { UserService } from '../../common/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[];

  constructor(private userService:UserService) { 
    userService.postFullyLoaded$.subscribe(
      data => { 
        this.posts = data.posts
      }),
      err => console.error(err)
  }

  ngOnInit() {
  }

}
