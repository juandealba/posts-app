import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmailLoginComponent } from './email-login.component';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User, Address, Company, Geo, Post, Comment } from '../../common/data-model';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthenticateRoutingModule } from '../authenticate-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

describe('EmailLoginComponent', () => {
  let component: EmailLoginComponent;
  let fixture: ComponentFixture<EmailLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        AuthenticateRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule, 
        MatButtonToggleModule, 
        MatInputModule,
        MatFormFieldModule,
        FormsModule, 
        ReactiveFormsModule,
      ],
      providers: [PostsAppService, UserService],
      declarations: [ EmailLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set login button to disabled by default'`, async(() => {
    expect(component.loginButtonDisabled).toBeTruthy();
  }));

  it(`should set error message to invisible by default'`, async(() => {
    expect(component.errorMessage).toBeUndefined();
  }));

  it(`should enable login button when email has right format'`, async(() => {
    component.loginEmailFormControl.setValue('email@gmail.com');
    component.validateLoginForm();
    expect(component.loginButtonDisabled).toBeFalsy();
  }));

  it(`should disable login button when email has wrong format'`, async(() => {
    component.loginEmailFormControl.setValue('email@gmail.com');
    component.validateLoginForm();
    component.loginEmailFormControl.setValue('email$gmail.com');
    component.validateLoginForm();
    expect(component.loginButtonDisabled).toBeTruthy();
  }));

  it(`should disable login button when text is removed'`, async(() => {
    component.loginEmailFormControl.setValue('email@gmail.com');
    component.validateLoginForm();
    component.loginEmailFormControl.setValue('');
    component.validateLoginForm();
    expect(component.loginButtonDisabled).toBeTruthy();
  }));

  it(`should navigate to profile page when authentication succeeds'`, async(() => {
    let dataStub = fixture.debugElement.injector.get(PostsAppService);
    let returnObject = new Array<User>();
    returnObject.push(new TestUser())
    const searchSpy = spyOn(dataStub, 'searchUserByEmail').and.returnValue(
      of(returnObject)
    );
    let navigateSpy = spyOn(fixture.componentInstance.router, 'navigateByUrl');
    let userServiceSpy = spyOn(fixture.componentInstance.userService, 'emmitLogin');
    component.loginEmailFormControl.setValue('email@gmail.com');
    component.validateLoginForm();
    component.login();
    expect(searchSpy).toHaveBeenCalledWith('email@gmail.com');
    expect(navigateSpy).toHaveBeenCalledWith('/profile');
    expect(userServiceSpy).toHaveBeenCalledWith(jasmine.any(Object));
  }));

  it(`should show error message when authentication fails'`, async(() => {
    let dataStub = fixture.debugElement.injector.get(PostsAppService);
    let returnObject = new Array<User>();
    returnObject.push(new TestUser())
    const searchSpy = spyOn(dataStub, 'searchUserByEmail').and.returnValue(
      throwError(new Error())
    );
    component.loginEmailFormControl.setValue('email@gmail.com');
    component.validateLoginForm();
    component.login();
    expect(searchSpy).toHaveBeenCalledWith('email@gmail.com');
    expect(component.errorMessage).toBe('Something went wrong. Please try again later');
  }));

  it(`should show error message when user does not exist'`, async(() => {
    let dataStub = fixture.debugElement.injector.get(PostsAppService);
    let returnObject = new Array<User>();
    const searchSpy = spyOn(dataStub, 'searchUserByEmail').and.returnValue(
      of(returnObject)
    );
    component.loginEmailFormControl.setValue('nonexisting@gmail.com');
    component.validateLoginForm();
    component.login();
    expect(searchSpy).toHaveBeenCalledWith('nonexisting@gmail.com');
    expect(component.errorMessage).toBe('Email Not Found');
  }));
});

class TestUser implements User{
  id: number;  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
}
