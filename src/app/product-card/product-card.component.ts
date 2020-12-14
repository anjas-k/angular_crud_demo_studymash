import { Component, OnInit,Input } from '@angular/core';
import { IProducts } from '../IProducts.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

 @Input() product:IProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
