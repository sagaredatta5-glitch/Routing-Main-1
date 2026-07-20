import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  ProductsForm!:FormGroup
  isinEditmode : boolean = false
  productId!:string
  productobj!:Iproduct
  constructor(
    private _productserv:ProductsService,
    private _router:Router,
    private _routes:ActivatedRoute,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.createproductform()
    this.patchproductdata()
    
  }

  createproductform(){
this.ProductsForm = new FormGroup({
  pname : new FormControl(null,(Validators.required)),
  pstatus : new FormControl('In-Progress'),
  canReturn : new FormControl(0)

})
  }

  patchproductdata(){
    this.productId = this._routes.snapshot.paramMap.get('id')!
    if(this.productId){
      this.isinEditmode=true  
      this._productserv.fetchproductById(this.productId)
      .subscribe({
        next:res=>{
          this.ProductsForm.patchValue(res)
          console.log(res);
          
        }
      })
    }
  }

  onproductAdd(){
    if(this.ProductsForm.invalid){
      this.ProductsForm.markAllAsTouched()
      return
    }else{
      let productobj:Iproduct = {...this.ProductsForm.value, pid : Date.now().toString() };
    this._productserv.createproduct(productobj)
    .subscribe({
      next:res=>{
        console.log(res);
        this.ProductsForm.reset()
        this._router.navigate(['products'])
        this._snackbar.opensnackbar(res.msg)
        this._router.navigate(['/product',this.productobj.pid])

      },error:err=>{
        console.log(err);
        
      }
    })
    }
  }

  onUpdate(){
if(this.ProductsForm.invalid){
  this.ProductsForm.markAllAsTouched()
}else{
  let Updated_obj:Iproduct = {
    ...this.ProductsForm.value, 
    pid:this.productId}
    this._productserv.updatedproduct(Updated_obj)
    .subscribe({
      next:res=>{
        console.log(res);
        this.ProductsForm.reset()
        this.isinEditmode=false
        this._router.navigate(['products'])
        this._snackbar.opensnackbar(res.msg)
          this._router.navigate(['/product',this.productobj.pid])

      },error:err=>{
        console.log(err);
        
      }
    })
    
}
  }

}
