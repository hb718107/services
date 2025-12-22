import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',

})
export class AdminComponent {
  constructor(private userService: UserService) { 

  }

  name: string = '';
  gender: string = 'Male';
  subscriptionType: string = 'Yearly';
  status: string = 'Active';

  isClicked: boolean = false;

  createnewUser(){
    this.isClicked = true;
    this.userService.createUser(this.name, this.gender, this.subscriptionType, this.status);
    console.log(this.userService.users);
  }



  
}
