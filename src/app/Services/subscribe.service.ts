import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' //global singleton service
})
export class SubscribeService {

    OnSubscribeClicked(type : string){
      alert('Subscribed Your '+type+' Service Successfully!');
  }
}