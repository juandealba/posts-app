import { Component, OnInit } from '@angular/core';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Post } from '../../common/data-model';
import { Router } from '@angular/router';
import { Observable, forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user:User;
  posts:Post[];

  constructor(public postAppService: PostsAppService, public router:Router, public userService:UserService) {
    this.onCreation();
   }

  
  onCreation(){
    if(this.userService.theUser == null){
      this.router.navigateByUrl('/authenticate')
    }
  }

  ngOnInit() {
    this.user = this.userService.theUser; 
    this.postAppService.searchPostsByUserId(this.user.id).subscribe(
      data => {
        this.posts = data;
        this.doFork();
        this.user.posts = this.posts;
        this.userService.emmitPostFullyLoaded(this.user)
      }
    )
  }

  doFork(){
    this.populatePostsComments().subscribe(
      data => {
        //populate collection of comments
        this.posts.forEach((post, index) => {
          post.comments = data[index];
        });
      }
    )
  }

  //For each post, call service to get their comments. Wait for all calls to complete vie forkjoin
  populatePostsComments(){
    let batch = [];
    this.posts.forEach((post, index) => {
      batch.push(this.postAppService.searchCommentsByPostId(post.id))
    });
    return forkJoin(batch);
  }

}
