import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PostsAppService } from '../../common/posts-app.service';
import { UserService } from '../../common/user.service';
import { User } from '../../common/data-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {

  loginButtonDisabled: boolean = true;
  hideLoginFailed: boolean = true;
  errorMessage:string;
  loginEmailFormControl = new FormControl('', [
    Validators.email]
  );
  user:User;

  constructor(public postAppService: PostsAppService, public router:Router, public userService:UserService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.userService.user = this.user; 
  }

  validateLoginForm(){
    this.hideLoginFailed = true;
    this.errorMessage = null
    if(this.loginEmailFormControl.value != '' && this.loginEmailFormControl.valid ){
      this.loginButtonDisabled = false;
    }
    else
      this.loginButtonDisabled = true;
  }

  login(){
    this.postAppService.searchUserByEmail(this.loginEmailFormControl.value).subscribe(
      data => {
        if(data != null && data[0] != null){
          this.user = data[0];
          this.router.navigateByUrl('/profile')
          this.userService.emmitLogin(this.user)
        }
        else{
          this.hideLoginFailed = false;
          this.errorMessage = 'Email Not Found';
        }
      },
      err => {
        this.hideLoginFailed = false;
        this.errorMessage = 'Something went wrong. Please try again later';
      }
    )
  }

  validateSearchOnPaste(event){
    let text = event.clipboardData.getData('Text') //Gets the text pasted from clipboard

    if(text != ''){
      this.loginButtonDisabled = false;
    }
    else
      this.loginButtonDisabled = true;
  }

}
