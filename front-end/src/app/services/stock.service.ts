import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDetail } from '../entity/StockDetail';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  urlStock=" ";

  constructor(private httpclient:HttpClient) { }


  public getAllStocks(){

    this.urlStock="http://localhost:8090/GetAllStockDetail";
    return this.httpclient.get<StockDetail[]>(this.urlStock)
  }
  
  public addStock(stock : StockDetail){

    this.urlStock="http://localhost:8090/add-StockDetail";
    return this.httpclient.post<StockDetail>(this.urlStock,stock)
  }

  getStockById(id:number): Observable<StockDetail> 
  {
    this.urlStock="http://localhost:8090/GetByIdStockDetail/"; 

    return this.httpclient.get<StockDetail>(this.urlStock+id);
  }

  updateStock(stock: StockDetail): Observable<StockDetail> {

   this.urlStock="http://localhost:8090/updateStockDetail";
 
    return this.httpclient.put<StockDetail>(this.urlStock,stock);
  }
  
  deleteStock(id: number): Observable<{}> {
    this.urlStock="http://localhost:8090/delete-stockDetail/"

    
    return this.httpclient.delete(this.urlStock+id)
  }

}
