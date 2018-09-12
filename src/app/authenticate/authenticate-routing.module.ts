import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailLoginComponent } from './email-login/email-login.component';

const routes: Routes = [
  {
    path: '',
    component: EmailLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
