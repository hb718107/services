import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [UserService]
})
export class UserDetailComponent {

  // constructor(private userservice:UserService) {
  //  }
  //  userlist = this.userservice.getAllUsers();

}
