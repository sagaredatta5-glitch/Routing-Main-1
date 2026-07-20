import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { GetconfirmationComponent } from '../getconfirmation/getconfirmation.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productId!:string
  productobj!:Iproduct


  constructor(
    private _routes :ActivatedRoute,
    private _productservice:ProductsService,
    private _router:Router,
    private _snackbar:SnackbarService,
    private _matdilog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts(){
     this._routes.params
     .subscribe(res=>{
      this.productId = res['id']
       if(this.productId){
      this._productservice.fetchproductById(this.productId)
      .subscribe({
        next:data=>{
          this.productobj=data
        }
      })
    }
     })
   
  }

  onremove(){

    let configm = new MatDialogConfig()
    configm.disableClose=true,
    configm.width='400px',
    configm.data='Are You Sure Remove Product!!!'

    let matprod = this._matdilog.open(GetconfirmationComponent,configm)
    matprod.afterClosed().subscribe(comform=>{
      if(comform){
this._productservice.removeproduct(this.productId)
    .subscribe({
      next:res=>{
        console.log(res);
        this._snackbar.opensnackbar(res.msg)
        this._router.navigate(['products'])
        
      },error:err=>{
        console.log(err);
        
      }
    })
      }
    })



    
  }

}
