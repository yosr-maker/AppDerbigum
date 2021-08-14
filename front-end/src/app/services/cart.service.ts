import { Injectable } from '@angular/core';
import { Cart } from '../entity/Cart';
import { Product } from '../entity/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {cart:Cart[]=[];
  cartData={len : 0,cost:0};
  
    constructor() { }
   
    UpdateDataCart(){
      let len=0;
      let cost=0;
      this.cart.forEach(element =>{ len +=element.number;cost +=  element.product.price*element.number;
      
      });
      this.cartData.len=len;
      this.cartData.cost = parseFloat(cost.toFixed(2));
      
    }
    addProductToCard(newProduct:Product):void{
  const checkedProduct=this.cart.find(element =>element.product == newProduct);
    
    if(checkedProduct){
      checkedProduct.number++;
    }else{
        const newProductToAdd = {
          number:1,
          product:newProduct
        };
        this.cart.push(newProductToAdd);
      }
  this.UpdateDataCart();
    }
    deleteFromCart(productToDelete:Product):void {
      const indexProduct=this.cart.findIndex(element => element.product== productToDelete)
    if(indexProduct!==-1){
      if(this.cart[indexProduct].number>1){
        this.cart[indexProduct].number--;
  
      }
      else{
        this.cart.splice(indexProduct,1);
      }
    }
    this.UpdateDataCart();
    }
    removeElementOfCart(index: number): void{
      this.cart.splice(index,1);
      this.UpdateDataCart();
    }
    }

 
