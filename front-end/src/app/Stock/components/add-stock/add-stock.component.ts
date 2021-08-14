import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockDetail } from 'src/app/entity/StockDetail';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stockDetail : StockDetail = new StockDetail();
  name : any;
  constructor(private stockService: StockService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ajouterStock(form: NgForm){
    console.log(this.stockDetail)

   let stockDetail : StockDetail =  {
      idStockDetail : null,
      name : form.value.name,
      quantiteInstan: null,
      quantiteMax : null,
      quantiteMin: null,
      dexpiration: null,
      fabrication: null,
      produit : null
    }
    
   //console.log(this.product.stockDetail)
    this.stockService.addStock(stockDetail).subscribe();
    this.router.navigate(['/crud-stock']);
  }

}
