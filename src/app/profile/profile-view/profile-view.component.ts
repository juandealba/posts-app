import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/user.service';
import { User } from '../../common/data-model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user:User;
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.user; 
  }

}
