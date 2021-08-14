import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../entity/Product';

import { ProductService } from '../services/product.service';
import { Image } from '../entity/Image';
import { StockDetail } from '../entity/StockDetail';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  stockDetail : StockDetail = new StockDetail();

  product: Product = new Product();
  submitted = false;
  list : Product[];
selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
image: any;                    
picture:any;
  constructor(private productService:ProductService, private router:Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.product = new Product();
    this.list = [];
    console.log(this.list);
  }
  
goToProdList(){
  this.router.navigate(['/products']);
}
 
 //Gets called when the user selects an image
 public onFileChanged(event: any) {
  //Select File
  this.selectedFile = event.target.files[0];
}


//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8090/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 201) {
        this.message = 'Image uploaded successfully';
        this.picture = response.body;
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );

}

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8090/get/' + this.image)
    .subscribe(
      res => {
        //this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;
      }
    );
}
saveProd(){
this.product.image= new Image();
this.product.image.id = this.picture.id;
  this.productService.createProduct(this.product).subscribe(data => {
    console.log(data);
    this.goToProdList();
  },
  error => console.log(error)); 
}

  
}