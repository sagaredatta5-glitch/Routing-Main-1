import { Injectable } from '@angular/core';
import { Iproduct, Ires } from '../model/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr:Array<Iproduct> = [
  {
    pname: 'Samsung M31',
    pid: '123',
    pstatus: 'In-Progress',
    canReturn: 1
  },
  {
    pname: 'Samsung TV',
    pid: '124',
    pstatus: 'Dispatched',
    canReturn: 1
  },
  {
    pname: 'iPhone 15',
    pid: '125',
    pstatus: 'Delivered',
    canReturn: 0
  },
  {
    pname: 'OnePlus 12',
    pid: '126',
    pstatus: 'In-Progress',
    canReturn: 1
  },
  {
    pname: 'Sony Bravia',
    pid: '127',
    pstatus: 'Delivered',
    canReturn: 0
  },
  {
    pname: 'MacBook Pro M4',
    pid: '128',
    pstatus: 'Dispatched',
    canReturn: 1
  }
];
  constructor() { }

  fetchdata():Observable<Iproduct[]>{
   return of (this.productsArr)
  }

  fetchproductById(id:string):Observable<Iproduct>{
    let productId = this.productsArr.find(p=>p.pid===id)!
    return of(productId)
  }

  createproduct(product:Iproduct):Observable<Ires<Iproduct>>{
    this.productsArr.push(product)
    return of({
      msg:`This new product With id ${product.pname} is crreated successfully`,
      data:product
    })

  }

  updatedproduct(up:Iproduct):Observable<Ires<Iproduct>>{
    let getindex = this.productsArr.findIndex(p=>p.pid===up.pid)
    this.productsArr[getindex] = up
    return of({
       msg:`This new product With id ${up.pname} is Updated successfully`,
      data:up
    })

  }

  removeproduct(id:string):Observable<Ires<Iproduct>>{
    let getindex = this.productsArr.findIndex(p=>p.pid===id)
    let product = this.productsArr.splice(getindex,1)
    return of({
      msg:`This new product With id ${product[0].pid} is Updated successfully`,
      data:product[0]
    })

  }


}
