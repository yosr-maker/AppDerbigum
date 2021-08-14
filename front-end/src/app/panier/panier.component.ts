import { Component, OnInit } from '@angular/core';
import { Cart } from '../entity/Cart';
import { Product } from '../entity/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cart: Cart[] = [];
  
  p:Product[];

  cartData: { len: number; cost: number; };
 
 data:any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }
AddToCart(product:Product):void {
    this.cartService.addProductToCard(product);
      }
    deleteFromCart(product:Product):void{
    this.cartService.deleteFromCart(product);
    }
  
    removeElementOfCart(index:number){
      this.cartService.removeElementOfCart(index);
    }
}
