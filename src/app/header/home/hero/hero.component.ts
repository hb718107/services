import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers: [SubscribeService]
})
export class HeroComponent {
  constructor(private subscribeService: SubscribeService) {}
  OnSubscribe(){
      this.subscribeService.OnSubscribeClicked('Hero');
  }
}

