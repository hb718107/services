import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';
import { UserListComponent } from '../../admin/user-list/user-list.component';

@Component({
  
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
   //providers: [SubscribeService],

})
export class SidebarComponent {
   constructor(public subscribeService: SubscribeService) {}
 OnSubscribe(){
      this.subscribeService.OnSubscribeClicked('Sidebar');
   }
}
