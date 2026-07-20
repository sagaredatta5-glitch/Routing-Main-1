import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/model/user';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

   userform!:FormGroup
  isineditmode:boolean=false
  editUser!:Iuser
  userId!:string
  userdetail!:Iuser

  constructor(
     private _userservice:UserService,
    private _snackbar:SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createuserform()
    this.addskillcontrol()
    this.permanentAddhandeler()
    this.isAddSameHandelar()
    this.patchuserdatainform()
  }

   patchuserdatainform(){
    this._routes.params .subscribe((param:Params)=>{
      this.userId=param['id']
      if(this.userId){
        this.isineditmode=true

    this._userservice.getuserById(this.userId)
    .subscribe({
      next:res=>{
        this.editUser = res
        this.userform.patchValue({...this.editUser})
       this.patchskills()
       if(this.formcontrols['address'].get('permanent')?.valid){
        this.formcontrols['isAddSame'].enable()
        this.formcontrols['address'].get('permanent')?.patchValue(this.editUser.address.permanent)
       }
      }
    })
      }
    })
  }


  patchskills(){
     this.skillsArr.clear()
        this.editUser.skills.forEach(skill=>{
          let skillcontrol = new FormControl(skill,[Validators.required])
          this.skillsArr.push(skillcontrol)
        })
  }

  isAddSameHandelar(){
this.formcontrols['isAddSame'].valueChanges
    .subscribe(val=>{
      if(val){
        let currentAdd = this.formcontrols['address'].get('current')?.value;
        this.formcontrols['address'].get('permanent')?.patchValue(currentAdd)
        this.formcontrols['address'].get('permanent')?.disable()

      }else if(this.isineditmode && !val){
        this.formcontrols['address'].get('permanent')?.patchValue(this.editUser.address.permanent)
        this.formcontrols['address'].get('permanent')?.enable()

      }
      else{
        this.formcontrols['address'].get('permanent')?.reset()
        this.formcontrols['address'].get('permanent')?.enable()
      }
    })
  }

  permanentAddhandeler(){
this.formcontrols['address'].get('current')?.valueChanges
    .subscribe(val=>{
      if(this.formcontrols['address'].get('current')?.valid){
        this.formcontrols['isAddSame'].enable()
      }else{
         this.formcontrols['isAddSame'].reset()
          this.formcontrols['isAddSame'].disable()
      }
    })
  }

  createuserform(){
  this.userform = new FormGroup({
  userName:new FormControl(null,(Validators.required)),
  userRole:new FormControl(null,Validators.required),
  profileDescription:new FormControl(null,(Validators.required)),
  profileImage:new FormControl(null,(Validators.required)),
  experienceYears:new FormControl(null,(Validators.required)),
  isActive:new FormControl(null,(Validators.required)),
  isAddSame:new FormControl({value:null,disabled:true},(Validators.required)),
  address:new FormGroup({
    current:new FormGroup({
      city:new FormControl(null,(Validators.required)),
      state:new FormControl(null,(Validators.required)),
      country:new FormControl('India'),
      zipcode:new FormControl(null,(Validators.required))
    }),
    permanent:new FormGroup({
      city:new FormControl(null,(Validators.required)),
      state:new FormControl(null,(Validators.required)),
      country:new FormControl('India'),
      zipcode:new FormControl(null,(Validators.required))
    })

  }),
  skills:new FormArray([])

})
  }

addskillcontrol(){
 if(this.formcontrols['skills'].valid){
   let skillcontrol = new FormControl(null,(Validators.required))
  this.skillsArr.push(skillcontrol)
 }
}

  get formcontrols(){
    return this.userform.controls
  }

  get skillsArr(){
    return this.formcontrols['skills'] as FormArray
  }


  onsubmit(){
    if(this.userform.invalid){
      this.userform.markAllAsTouched()
    }
    let userobj:Iuser = {
      ...this.userform.getRawValue(),
      userId:Date.now().toString()
    }
    this._userservice.Addnewuser(userobj)
    .subscribe({
      next:res=>{
        this._snackbar.opensnackbar(res.msg)
        this.userform.reset()
        this._router.navigate(['user'])
      }
    })
    
  }

  onupdateuser(){
    if(this.userform.invalid){
      this.userform.markAllAsTouched()
    }else{
      let updateduser:Iuser={
        ...this.userform.getRawValue(),
        userId:this.userId
      }
      this._userservice.onupdateuser(updateduser)
      .subscribe({
        next:res=>{
          this._snackbar.opensnackbar(res.msg)
          this.userform.reset()
          this.isineditmode=false
          this._router.navigate(['/user',this.editUser.userId])
        }
      })
    }
  }

  onskillremove(i:number){
this.skillsArr.removeAt(i)
  }

}


