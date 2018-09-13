import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailLoginComponent } from './email-login/email-login.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    MatButtonModule, 
    MatButtonToggleModule, 
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [EmailLoginComponent]
})
export class AuthenticateModule { }
