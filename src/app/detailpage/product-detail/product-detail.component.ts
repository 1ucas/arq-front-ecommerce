import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../homepage/product-list/product-item/product-item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() produto:ProductItem;

  constructor() { }

  ngOnInit() {
  }

}
