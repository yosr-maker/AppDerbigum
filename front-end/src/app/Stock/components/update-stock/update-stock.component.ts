import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetail } from 'src/app/entity/StockDetail';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

 
  stockDetail: StockDetail;
  constructor(private route: ActivatedRoute,
              private stockService: StockService,
              private router : Router) { }

  ngOnInit(): void {
    this.handleOneProduct();
  }


handleOneProduct() {

// get the "id" param string. convert string to a number using the "+" symbol
const theStockId: number = +this.route.snapshot.paramMap.get('id');

this.stockService.getStockById(theStockId).subscribe(
data => {
this.stockDetail = data;
console.log(this.stockDetail)
}
)

}

updateStock(form: NgForm) {

  let stockDetail : StockDetail = {
    idStockDetail : form.value.id,
    name : form.value.name,
    quantiteInstan: null,
    quantiteMax : null,
    quantiteMin: null,
    dexpiration: null,
    fabrication: null,
    produit: null
  }
  this.stockService.updateStock(stockDetail).subscribe(
    data => {
      this.stockDetail = data
      console.log(data)
    }
  )
  this.router.navigate(['/crud-stock']);
  
}

}