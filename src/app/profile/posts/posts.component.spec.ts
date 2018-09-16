import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Address, Company, Geo, Post, Comment, TestUser } from '../../common/data-model';
import { AppRoutingModule } from '../../app-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatExpansionModule, MatGridListModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent ],
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
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set data when all service calls return', () => {
    let testUser = new TestUser();
    let post = new Post()
    let posts = new Array<Post>();
    posts.push(post);
    testUser.posts = posts;
    testUser.id = 99;
    component.userService.user = testUser;
    component.userService.emmitPostFullyLoaded(testUser);
    expect(component.posts.length == 1).toBeTruthy();
  });
});

