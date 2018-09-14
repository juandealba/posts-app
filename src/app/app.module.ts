import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsAppService } from './common/posts-app.service';
import { UserService } from './common/user.service';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [PostsAppService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
