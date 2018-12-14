import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../homepage/product-list/product-item/product-item';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.css']
})
export class ProductSuggestionComponent implements OnInit {

  @Input() produtoEmCompra:ProductItem;
  produtosFiltrados:ProductItem[];

  constructor() { }

  ngOnInit() {
    var produtos = new ProductService().GetProducts();
    this.produtosFiltrados = produtos.filter((el) => { return (el.id !== this.produtoEmCompra.id) && (el.tipo === this.produtoEmCompra.tipo);});
  }

}
