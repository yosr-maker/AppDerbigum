import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockDetail } from 'src/app/entity/StockDetail';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-crud-stock',
  templateUrl: './crud-stock.component.html',
  styleUrls: ['./crud-stock.component.css']
})
export class CrudStockComponent implements OnInit {


  stocks : StockDetail[]


  constructor(private stockService : StockService,
              private router: Router) { }

  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe( data => {
      this.stocks=data;
      console.log("Nos produits")
    })

  }

  onModif() {
  //  this.router.navigate(['/update/'+id])
  }

  onDeleteStock(stock:StockDetail){

    console.log(stock)
    this.stockService.deleteStock(stock.idStockDetail).subscribe(
      data => 
      console.log("product deleted! ")
    )
    this.router.navigate(['/crud-stock']);

  }
}
