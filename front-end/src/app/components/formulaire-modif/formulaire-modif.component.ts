import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/entity/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-formulaire-modif',
  templateUrl: './formulaire-modif.component.html',
  styleUrls: ['./formulaire-modif.component.css']
})
export class FormulaireModifComponent implements OnInit {

  
  @Input() monProduct : Product;
  product:Product= new Product();
  id:number;
  constructor(private productService:ProductService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data=>{
this.product=data;
    },error=>console.log(error));
  }

  gotoProductList(){
    this.router.navigate(["/products"]);
  }
  onSubmit(){
    this.productService.updateProduct(this.id,this.product).subscribe(data=>{
     this.gotoProductList();
    },error=>console.log(error))
  }

}
