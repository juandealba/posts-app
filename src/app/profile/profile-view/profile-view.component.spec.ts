import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Address, Company, Geo, Post, Comment, TestUser } from '../../common/data-model';
import { UserDetailComponent } from '../user-detail/user-detail.component'
import { PostsComponent } from '../posts/posts.component'
import { AppRoutingModule } from '../../app-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatExpansionModule, MatGridListModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

import { ProfileViewComponent } from './profile-view.component';
import { Router } from '@angular/router';

describe('ProfileViewComponent', () => {
  let component: ProfileViewComponent;
  let fixture: ComponentFixture<ProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewComponent, UserDetailComponent, PostsComponent ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule, 
        MatButtonToggleModule, 
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule, 
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      providers: [PostsAppService, UserService],
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    let userService = TestBed.get(UserService);
    let testUser = new TestUser();
    testUser.id = 99;
    userService.user = testUser;
    const userSpy = spyOnProperty(userService, 'theUser', 'get').and.returnValue(testUser);
    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should create and call OnCreation', () => {
    let userService = TestBed.get(UserService);
    let testUser = new TestUser();
    testUser.id = 99;
    userService.user = testUser;
    const userSpy = spyOnProperty(userService, 'theUser', 'get').and.returnValue(testUser);
    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;

    expect(userSpy).toHaveBeenCalled();
  });

  it('should navigate to login page when not authenticated', () => {
    let userService = TestBed.get(UserService);
    let router = TestBed.get(Router);
    let testUser = null;
    const userSpy = spyOnProperty(userService, 'theUser', 'get').and.returnValue(testUser);
    const routerSpy = spyOn(router, 'navigateByUrl');
    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;

    expect(routerSpy).toHaveBeenCalled();
    expect(userSpy).toHaveBeenCalled();
  });

  // it('should something', () => {
  //   let userService = TestBed.get(UserService);
  //   //let router = TestBed.get(Router);
  //   let postsAppService = TestBed.get(PostsAppService);

  //   let testUser = new User();
  //   testUser.id = 99;
  //   userService.user = testUser;

  //   const userSpy = spyOnProperty(userService, 'theUser', 'get').and.returnValue(testUser);
  //   //const routerSpy = spyOn(router, 'navigateByUrl');
  //   const postsAppServiceSpy = spyOn(postsAppService, 'searchPostsByUserId').and.returnValue(
  //     of(new Array<Post>())
  //   );

  //   let comment = new TestComment();
  //   comment.id = 10;
  //   let arrayCom = new Array<Comment>();
  //   arrayCom.push(comment);
  //   const postsAppServiceCommentsSpy = spyOn(postsAppService, 'searchCommentsByPostId').and.returnValue(
  //     of(arrayCom)
  //   );

  //   fixture = TestBed.createComponent(ProfileViewComponent);
  //   component = fixture.componentInstance;

    
  //   expect(userSpy).toHaveBeenCalled();
  //   expect(postsAppServiceSpy).toHaveBeenCalledWith(99);
  //   expect(postsAppServiceCommentsSpy).toHaveBeenCalledWith(10);
  // });

});

class TestComment implements Comment{
  postId: number;  id: number;
  name: string;
  email: string;
  body: string;
}