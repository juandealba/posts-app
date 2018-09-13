import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PostsAppService } from '../../common/posts-app.service';
import { User } from '../../common/data-model';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {

  loginButtonDisabled: boolean = true;
  hideLoginFailed: boolean = true;
  loginEmailFormControl = new FormControl('', [
    Validators.email]
  );

  constructor() { }

  ngOnInit() {
  }

  validateLoginForm(){
    this.hideLoginFailed = true;
    if(this.loginEmailFormControl.value != '' && this.loginEmailFormControl.valid ){
      this.loginButtonDisabled = false;
    }
    else
      this.loginButtonDisabled = true;
  }

  login(){
    
  }

}
