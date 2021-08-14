import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../entity/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {

  products : Product[]
  liste : boolean;
  submitted = false;
  
 



  constructor(private productService : ProductService,private http : HttpClient,
              private router: Router ,private domSanitizer: DomSanitizer , 
              ) { }

  ngOnInit(): void {
   
    this.getProduct();

    this.http.get('http://localhost:8090/getallprod').subscribe((result :any)=>{
      this.products=result;
    });

    this.productService.getProductSoldes().subscribe( data => {
      this.products=data;
      console.log("Nos produits ")
    })

  }



 private getProduct(){
        this.productService.getAllproduct().subscribe(data=>{
              this.products=data;
              console.log('********products: ', this.products);
        })
      }
  onModif() {
  //  this.router.navigate(['/update/'+id])
  }

  onDeleteProduct(product:Product){

    console.log(product)
    this.productService.deleteProduct(product.id).subscribe(
      data => 
      console.log("product deleted! ")
    )

  }
  updateProduct(id:number){
    this.router.navigate(["updateProd",id])
    }

    deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe(data=>{
       console.log(data);
        this.getProduct();
      })
    }


    
  go(){
    this.router.navigate(["/add-product"])
  }
  getData() {
    this.productService.getAll().subscribe(
      response =>{this.productService.list = response;}
     );
   
  }

 
}
