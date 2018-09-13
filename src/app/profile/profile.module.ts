import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileRoutingModule } from './profile-routing.module';
import {MatGridListModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  declarations: [UserDetailComponent, PostsComponent, ProfileViewComponent]
})
export class ProfileModule { }
