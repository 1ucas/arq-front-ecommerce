import { Component, OnInit, Input } from '@angular/core';
import {ProductItem} from './product-item/product-item'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() produtos:ProductItem[];

  constructor() { }

  ngOnInit() {
  }

}
