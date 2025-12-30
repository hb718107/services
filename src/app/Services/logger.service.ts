import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' //global singleton service
})
export class LoggerService{
    logMessage(name: string, subscriptionType: string){
        console.log("Logger Service: " + name + " has subscribed to " + subscriptionType);
    }
}
