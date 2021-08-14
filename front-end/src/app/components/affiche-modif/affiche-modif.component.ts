import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/Product';

@Component({
  selector: 'app-affiche-modif',
  templateUrl: './affiche-modif.component.html',
  styleUrls: ['./affiche-modif.component.css']
})
export class AfficheModifComponent implements OnInit {
  @Input() monProduct : Product;
  public product;
  constructor() { }

  ngOnInit(): void {
  }

}
