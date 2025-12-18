import { User } from "../Models/User";
export class UserService {
    users : User[] = [
        new User('Alice', 'Female', 'Premium', 'Active'),
        new User ('Bob', 'Male', 'Free', 'Inactive'),
    ];

    getAllUsers(){
        return this.users;
    }

    createUser(name: string, gender: string, subscriptionType: string, status: string){
        let user = (new User(name, gender, subscriptionType, status));
        this.users.push(user);
        }
    }