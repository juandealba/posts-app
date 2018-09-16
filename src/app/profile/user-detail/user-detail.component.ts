import { Component, OnInit, Input } from '@angular/core';
import { User, Post, Address, Company, TestUser } from '../../common/data-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  @Input() user: User;

  constructor() { 
    if(this.user == null){
      let address = new Address();
      address.street = 'street';
      let company = new Company();
      let tempUser = new TestUser();
      tempUser.address = address;
      tempUser.company = company;
      this.user = tempUser;
    }
  }
  
  ngOnInit() {

  }

}
