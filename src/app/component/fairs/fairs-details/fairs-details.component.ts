import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/model/fairs';
import { FairsService } from 'src/app/service/fairs.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
fairsId!:string
  fairsobj!:Ifairs
  constructor(
    private _routes:ActivatedRoute,
    private _fairsservice:FairsService
  ) { }

  ngOnInit(): void {
     this._routes.params.subscribe((param:Params)=>{
      this.fairsId=param['id']
      if(this.fairsId){
        this._fairsservice.getfairsById(this.fairsId)
        .subscribe({
          next:res=>{
            this.fairsobj=res
          }
        })
      }
    })
  
  }

}
