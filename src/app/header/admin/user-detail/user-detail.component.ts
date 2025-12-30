import { Component,OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { Inject } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  selectedUser: User;
 constructor(
    @Inject(USER_TOKEN) private userService: UserService
  ) {}

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data:User)=>{
      this.selectedUser = data;
      console.log(this.selectedUser);
    });
  }

  // constructor(private userservice:UserService) {
  //  }
  //  userlist = this.userservice.getAllUsers();

}
