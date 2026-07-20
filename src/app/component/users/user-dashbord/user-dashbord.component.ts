import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {

  userarry:Array<Iuser> = []
  constructor(
    private _userservice:UserService
  ) { }

  ngOnInit(): void {
    this.getuserdata()
  }

  getuserdata(){
this._userservice.fetchuserdata()
.subscribe({
  next:data=>{
    this.userarry=data
  }
})
  }

}
