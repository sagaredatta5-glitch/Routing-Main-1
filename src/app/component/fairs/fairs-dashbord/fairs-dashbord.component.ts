import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifairs } from 'src/app/model/fairs';
import { FairsService } from 'src/app/service/fairs.service';

@Component({
  selector: 'app-fairs-dashbord',
  templateUrl: './fairs-dashbord.component.html',
  styleUrls: ['./fairs-dashbord.component.scss']
})
export class FairsDashbordComponent implements OnInit {

  fairsarry:Array<Ifairs> = []
  constructor(
     private _fairsservice:FairsService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.fetchdata()
  }

  fetchdata(){
    this._fairsservice.fetchfairsdata()
    .subscribe({
      next:data=>{
        this.fairsarry=data
        this._router.navigate(['fairs',this.fairsarry[0].fairId])
      }
    })
  }
  

}
