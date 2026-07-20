import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirmation',
  templateUrl: './getconfirmation.component.html',
  styleUrls: ['./getconfirmation.component.scss']
})
export class GetconfirmationComponent implements OnInit {

  getobj!:string
  constructor(private _matdilog:MatDialogRef<GetconfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) msg:string
  ) {this.getobj=msg }

  ngOnInit(): void {
  }

  onclick(flag:boolean){
    this._matdilog.close(flag)
  }

}
