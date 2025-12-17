import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // providers: [SubscribeService]
})
export class UserListComponent {
  constructor(private subscribeService: SubscribeService) {}
  OnSubscribe(){
      this.subscribeService.OnSubscribeClicked('User List');
   }
}
