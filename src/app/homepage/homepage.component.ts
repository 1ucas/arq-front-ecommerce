import { Component, OnInit } from '@angular/core';
import { ProductItem } from './product-list/product-item/product-item';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  livros: ProductItem[] = new ProductService().GetProducts().filter((el) => { return el.tipo == 1});

  filmes: ProductItem[] = new ProductService().GetProducts().filter((el) => { return el.tipo == 2});
  
  constructor() { }

  ngOnInit() {
  }

}
