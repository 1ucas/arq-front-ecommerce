import { Component, OnInit, Input } from '@angular/core';
import {ProductItem} from "./product-item"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() produto:ProductItem;

  constructor() { }

  ngOnInit() {
  }

}
