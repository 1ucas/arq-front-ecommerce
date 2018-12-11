import { Component, OnInit } from '@angular/core';
import {ProductItem} from './product-item/product-item'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produtos: ProductItem[] = [
    new ProductItem(1,"Harry Potter", "E a pedra da Filosofia", "R$20,00", "Descubra o mundo mágico de Happy Potter em sua primeira aventura."),
    new ProductItem(2,"Senhor dos Aneis", "A Sociedade do Anel", "R$11,00", "Embarque nessa incrível aventura em busca do Anel secreto."),
    new ProductItem(3,"Family Guy", "", "R$30,00", "Se emocione com as histórias dessa família que é da pesada.")
  ]

  constructor() { }

  ngOnInit() {
  }

}
