import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailLoginComponent } from './email-login/email-login.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ],
  declarations: [EmailLoginComponent]
})
export class AuthenticateModule { }
