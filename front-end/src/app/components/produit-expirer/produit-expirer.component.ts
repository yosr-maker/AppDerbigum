import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produit-expirer',
  templateUrl: './produit-expirer.component.html',
  styleUrls: ['./produit-expirer.component.css']
})
export class ProduitExpirerComponent implements OnInit {

  products: any
  productsFiltered : any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductExpires().subscribe( 
      (data) => {
      this.products = data;
      console.log(this.products)
    }, (error) => {
      console.log(error)
    })
  }

}

