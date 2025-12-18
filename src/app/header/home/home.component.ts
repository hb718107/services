import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {
  constructor(public subscribeService: SubscribeService) {}

}
