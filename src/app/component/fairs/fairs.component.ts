import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/model/fairs';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  @Input() fairsobj!:Ifairs
  constructor() { }

  ngOnInit(): void {
    console.log(this.fairsobj);
    
  }

}
