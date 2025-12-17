import { Component, Inject } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 

})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
}
