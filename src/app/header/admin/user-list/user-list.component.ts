import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // providers: [SubscribeService]
  providers: [SubscribeService]
})
export class UserListComponent {
  constructor(private subscribeService: SubscribeService,private userservice : UserService) {}
  OnSubscribe(){
      this.subscribeService.OnSubscribeClicked('User List');
   }
   userlist = this.userservice.getAllUsers();
}
