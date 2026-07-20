import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/model/user';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';
import { GetconfirmationComponent } from '../getconfirmation/getconfirmation.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userId!:string
  userobj!:Iuser

  constructor(
    private _routes:ActivatedRoute,
    private _userservice:UserService,
    private _snackbar:SnackbarService,
    private _router:Router,
    private _matdilog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getuserdata()
  }

  getuserdata(){
   this._routes.params.subscribe(param=>{
    this.userId = param['id']
    if(this.userId){
        this._userservice.getuserById(this.userId)
        .subscribe({
          next:res=>{
            this.userobj = res
          }
        })
      }
   })
  }

   onremove(){
let confo = new MatDialogConfig()
confo.width='400px',
confo.data=`Are You Sure Remove User!!!`,
confo.disableClose=true

let mat = this._matdilog.open(GetconfirmationComponent,confo)
mat.afterClosed().subscribe(conform=>{
  if(conform){
 this._userservice.removeuser(this.userId)
    .subscribe({
      next:res=>{
        this._snackbar.opensnackbar(res.msg)
        this._router.navigate(['user'])
      }
    })
  }
})
  }


}
