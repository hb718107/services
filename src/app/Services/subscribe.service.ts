import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' //global singleton service
})
export class SubscribeService {

    public name : string = 'Hussain';
    OnSubscribeClicked(type : string){
      this.name = type;
      alert('Subscribed Your '+type+' Service Successfully! ' + this.name);
  }
}