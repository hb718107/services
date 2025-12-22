export class LoggerService{
    logMessage(name: string, subscriptionType: string){
        console.log("Logger Service: " + name + " has subscribed to " + subscriptionType);
    }
}
