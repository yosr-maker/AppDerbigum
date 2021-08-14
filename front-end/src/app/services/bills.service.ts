import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../entity/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private b="http://localhost:8090/getbills";
  private a="http://localhost:8090/remove-bill";
  private p="http://localhost:8090/add-bill";
 
  constructor(private http:HttpClient) { }
 
 
getbills():Observable<Bill[]>{
    return this.http.get<Bill[]>(`${this.b}`);    
}
deletebill(id:number):Observable<any>{
  {
    return this.http.delete(`${this.a}/${id}`,{responseType:`text`});
  }}
addbill(bill:Object):Observable<Object>{
    return this.http.post(`${this.p}`,bill);
  }


}

