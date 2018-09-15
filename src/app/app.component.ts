import { Component } from '@angular/core';
import { UserService } from './common/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideMenu = true;

  constructor(private userService: UserService, private router:Router) {
    userService.login$.subscribe(
      data => { 
        this.hideMenu = false
      });
   }

   onLogout(){
    this.hideMenu = true;
    this.router.navigateByUrl('/authenticate')
   }
}
