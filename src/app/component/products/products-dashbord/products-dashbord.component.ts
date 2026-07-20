import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-dashbord',
  templateUrl: './products-dashbord.component.html',
  styleUrls: ['./products-dashbord.component.scss']
})
export class ProductsDashbordComponent implements OnInit {

  productsarry:Array<Iproduct> = []
  constructor(
    private _productservice :ProductsService,
    private _router:Router,
    private _routes:ActivatedRoute

  ) { 
    this.productsarry=this._routes.snapshot.data['product']
  }

  ngOnInit(): void {
    this._productservice.fetchdata()
    .subscribe({
      next:data=>{
        this.productsarry=data
        this._router.navigate(['/product',this.productsarry[0].pid])
      },error:err=>{
        console.log(err);
        
      }
    })
  }

}
