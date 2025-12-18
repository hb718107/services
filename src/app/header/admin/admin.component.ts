import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';
import { UserService } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [SubscribeService,UserService]

})
export class AdminComponent {
  constructor(private userService: UserService) { 

  }

  name: string = '';
  gender: string = 'Male';
  subscriptionType: string = 'Yearly';
  status: string = 'Active';

  createUser(){
    this.userService.createUser(this.name, this.gender, this.subscriptionType, this.status);
    console.log(this.userService.users);
  }


  
}
