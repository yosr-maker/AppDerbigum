import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entity/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modif-product',
  templateUrl: './modif-product.component.html',
  styleUrls: ['./modif-product.component.css']
})
export class ModifProductComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.handleOneProduct();
  }


handleOneProduct() {

// get the "id" param string. convert string to a number using the "+" symbol
const theProductId: number = +this.route.snapshot.paramMap.get('id');

this.productService.getProductById(theProductId).subscribe(
data => {
this.product = data;
console.log(this.product)
}
)

}
}