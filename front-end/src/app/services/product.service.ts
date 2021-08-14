import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Product } from '../entity/Product';
import { Image } from '../entity/Image';
import { Observable } from 'rxjs';
import { PanierComponent } from '../panier/panier.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlAllprod=" ";
  private baseUrl = 'http://localhost:8090';
  list: Product[];
  host :string = "http://localhost:8090";
  private  modify="http://localhost:8090/vupdateproduct";
  constructor(private httpclient:HttpClient) { }


  getProductList(): Observable<Product[]>{
    return this.httpclient.get<Product[]> ("http://localhost:8090/retrieve-all-Products");
  }


  public getAllproduct(){

    this.urlAllprod="http://localhost:8090/getallprod";
    return this.httpclient.get<Product[]>(this.urlAllprod)
  }
  
  getAll(): Observable<any> {
   
    return this.httpclient.get(`${this.baseUrl}` );
  }


  getProductById(id:number): Observable<Product> 
  {
    this.urlAllprod="http://localhost:8090/findproductById/"; 

    return this.httpclient.get<Product>(this.urlAllprod+id);
  }


  updateProduct(id:number,product:Product):Observable<any>{
    return this.httpclient.put(`${this.modify}`,product)
  }

  
  deleteProduct(id: number): Observable<{}> {
    this.urlAllprod="http://localhost:8090/deleteproduct/"

    
    return this.httpclient.delete(this.urlAllprod+id)
  }

  getProductExpires() {
    this.urlAllprod="http://localhost:8090/listStockExpirer"

    
    return this.httpclient.get<any>(this.urlAllprod)
  }

  getProductSoldes(): Observable<Product[]> {
    this.urlAllprod="http://localhost:8090/solde"

    
    return this.httpclient.get<Product[]>(this.urlAllprod)
  }


  getProductByName(name: string): Observable<any> {
    this.urlAllprod="http://localhost:8090/findproductByName"

    const theUrl = `${this.urlAllprod}/${name}`

    
    return this.httpclient.get<any>(theUrl)
  }

  filterProductByKisAndBabies() {
    this.urlAllprod="http://localhost:8090/filterByKIDANDBABIESCategorie"

    
    return this.httpclient.get<any>(this.urlAllprod)

  }

  filterByMenAndWomenClothesCategorie(){
    this.urlAllprod="http://localhost:8090/filterByMENANDWOMENCLOSHESCategorie"
    
    return this.httpclient.get<any>(this.urlAllprod)
  }

  filterByFashionAndBeautyCategorie(){
    this.urlAllprod="http://localhost:8090/filterByFASHIONBEAUTYCategorie"
    
    return this.httpclient.get<any>(this.urlAllprod)
  }

    createProduct(product:Product):Observable<any>{
      return this.httpclient.post("http://localhost:8090/add-product",product);
        }

        uploadFile(file: File): Observable<HttpEvent<{}>> {
          const formdata: FormData = new FormData();
          formdata.append('file', file);
          const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
              reportProgress: true,
              responseType: 'text'
          });
        
          return this.httpclient.request(req);
         }




}
