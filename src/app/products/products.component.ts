import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { Category } from '../Models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private productSerive: ProductServiceService
  ) {}
  productList: Product[] = [];
  tempList:Product[]=[];
  categories:Category[]=[];
  cId:number;
  searchtext:string="";
  msg:string;
  ngOnInit(): void {
    this.productSerive.getall().subscribe((data) => {
      this.productList = data;
      this.tempList=data;
    });
    this.productSerive.getallcategory().subscribe((data)=>{
      this.categories=data;
     
    })
  }

  onClick(pId: number) {
    this.router.navigate(['page-content/products', pId]);
  }

  ctgfilter(id:number){
   if(id==0){
     this.productList=this.tempList
   }
   else{
    this.productList=this.tempList.filter((product)=>product.category.categoryId==this.cId);
    console.log(JSON.stringify(this.productList));
   }
  }

  sortAscending(){
    this.productList=this.productList.sort((a,b)=>a.price-b.price);
  }

  sortDescending(){
    this.productList=this.productList.sort((a,b)=>b.price-a.price);
  }

  sortChange(id:Number){
    if(id==1){
      this.sortAscending();
    }
    else if(id==2){
      this.sortDescending();
    }
  }

  search(){
    if(this.productList.filter(
      x => x.productName.toLowerCase().startsWith(this.searchtext.toLowerCase())
    ).length == 0){
      this.msg="No products with  name '" + this.searchtext+"'";
    } else{
      this.msg='';
    }
    console.log("hii")
  }

}
