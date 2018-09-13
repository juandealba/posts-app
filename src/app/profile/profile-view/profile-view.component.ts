import { Component, OnInit } from '@angular/core';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Post } from '../../common/data-model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user:User;
  posts:Post[];

  constructor(private postAppService: PostsAppService, private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.user; 
    this.postAppService.searchPostsByUserId(this.user.id).subscribe(
      data => {
        this.posts = data;
      },
      err => {

      }
    )
  }

}
