import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  allReadyHasAccount:boolean=false
  loginForm!:FormGroup
  SignUpForm!:FormGroup
  constructor(
    private _authserv:AuthService,
    private _snackbar:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.createSignupform()
    this.createloginform()
  }

  createSignupform(){
    this.SignUpForm = new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      userRole : new FormControl('admin')
    })
  }

  createloginform(){
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    })
  }

  onlogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
    }else{
      let detailes = this.loginForm.value
      this._authserv.login(detailes)
      .subscribe({
        next:data=>{
         this._snackbar.opensnackbar(data.message)
         this._authserv.saveToken(data.token)
         this._authserv.saveUserRole(data.userRole)
         this._router.navigate(['home'])
        },error:err=>{
          this._snackbar.opensnackbar(err.error.message)
        }
      })
      
    }
  }


  onSingup(){
    if(this.SignUpForm.invalid){
      this.SignUpForm.markAllAsTouched()
    }else{
      let userDetails = this.SignUpForm.value;
      console.log(userDetails)

      this._authserv.signUp(userDetails)
      .subscribe({
        next:data=>{
          this._snackbar.opensnackbar(data.message)
          this.allReadyHasAccount=true
        },error:err=>{
          this._snackbar.opensnackbar(err.error.message)
        }
      })
    }
  }

}
