import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { PostsAppService } from './common/posts-app.service';
import { UserService } from './common/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AppRoutingModule,
        MatButtonModule, 
        MatIconModule, 
        MatMenuModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [PostsAppService, UserService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Posts'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Posts');
  }));
  it('should render title as User Posts Application', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#postTitle').textContent).toContain('User Posts Application');
  }));
  it('should route to login page when logout', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    let navigateSpy = spyOn(fixture.componentInstance.router, 'navigateByUrl');
    fixture.componentInstance.hideMenu = false;
    fixture.componentInstance.onLogout();
    expect(navigateSpy).toHaveBeenCalledWith('/authenticate');
  }));
  it('should hide menu on login page', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    let navigateSpy = spyOn(fixture.componentInstance.router, 'navigateByUrl');
    fixture.componentInstance.hideMenu = false;
    fixture.componentInstance.onLogout();
    expect(navigateSpy).toHaveBeenCalledWith('/authenticate');
    expect(fixture.componentInstance.hideMenu).toBe(true);
  }));
});
