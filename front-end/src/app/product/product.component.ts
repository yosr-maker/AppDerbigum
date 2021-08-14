import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../entity/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

list : Product[]
product:any;
data:any;
pro : Product
searchMode : boolean = false




  constructor(private productService : ProductService , private cartService :CartService,
    public crudApi :ProductService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProduct()
    
    }



    listProduct() {
      this.searchMode = this.route.snapshot.paramMap.has('keyword')
      if(this.searchMode) {
        this.handleSearchProduct();
      }
      else {
        this.handleListProduct();
      }
    }


  handleListProduct() {
    this.productService.getAllproduct().subscribe( 
      data => {
      this.list = data;
    }
    )
  }

  handleSearchProduct(){

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')
    this.productService.getProductByName(theKeyword).subscribe(
      data => {
        this.list = data;
        console.log(this.list)
      }
    )
  }


    getData() {
      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.list = response;}
      ); }
      
  getProduct(){
    this.productService.getAllproduct().subscribe(data=>{
          this.list=data;
          console.log('********products: ', this.list);
    })
  }

  AddToCart(product:Product):void {
  this.cartService.addProductToCard(product);
  }

  deleteFromCart(product:Product){
  this.cartService.deleteFromCart(product);
  }
}