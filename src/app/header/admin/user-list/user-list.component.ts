import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // providers: [SubscribeService]
})
export class UserListComponent {
  constructor(private subscribeService: SubscribeService,@Inject(USER_TOKEN) private userservice : UserService) {}
  OnSubscribe(){
      this.subscribeService.OnSubscribeClicked('User List');
   }
   userlist = this.userservice.getAllUsers();

   ShowUserDetails(user:User){
    this.userservice.onShowUserDetails(user);
   }
}
