import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";


@Injectable()
export class UserService {
    users : User[] = [
        new User('Alice', 'Female', 'Premium', 'Active'),
        new User ('Bob', 'Male', 'Free', 'Inactive'),
        new User ('Charlie', 'Male', 'Standard', 'Active')
    ];
    constructor( private logger: LoggerService){}

    getAllUsers(){
        return this.users;
    }

    createUser(name: string, gender: string, subscriptionType: string, status: string){
        let user = (new User(name, gender, subscriptionType, status));
        this.users.push(user);
        this.logger.logMessage(name, subscriptionType);
    }

    }