import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  OnSubscribe(){
    alert('Subscribed Successfully!');
  }
}
