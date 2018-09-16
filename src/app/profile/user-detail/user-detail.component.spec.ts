import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Address, Company, Geo, Post, Comment, TestUser } from '../../common/data-model';
import { PostsComponent } from '../posts/posts.component'
import { AppRoutingModule } from '../../app-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatExpansionModule, MatGridListModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent ],
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
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let user = new TestUser();
    user.name = 'peter'
    user.address = new Address();
    user.address.street = 'street';
    fixture.componentInstance.user = user;
    expect(component).toBeTruthy();
  });
});
