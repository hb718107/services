import { Component, Inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { USER_TOKEN } from '../../app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',

})
export class AdminComponent {
  constructor( @Inject(USER_TOKEN) private userService: UserService) { 

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
