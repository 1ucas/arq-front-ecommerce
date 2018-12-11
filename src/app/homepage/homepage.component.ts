import { Component, OnInit } from '@angular/core';
import { ProductItem } from './product-list/product-item/product-item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  livros: ProductItem[] = [
    new ProductItem(1,"A vida de Matilda", "", "R$30,00", "O livro mais ditático sobre os assuntos comuns da vida."),
    new ProductItem(2,"O Machado do Assis", "", "R$10,00", "Descrições da batalha de Assis usando seu novo Machado do trovão."),
  ];

  filmes: ProductItem[] = [
    new ProductItem(3,"Harry Potter", "E a pedra da Filosofia", "R$20,00", "Descubra o mundo mágico de Happy Potter em sua primeira aventura."),
    new ProductItem(4,"Senhor dos Aneis", "A Sociedade do Anel", "R$11,00", "Embarque nessa incrível aventura em busca do Anel secreto."),
    new ProductItem(5,"Family Guy", "", "R$45,00", "Se emocione com as histórias dessa família que é da pesada."),
    new ProductItem(6,"Beethoven", "O cão sapeca", "R$40,00", "Esse cãozinho faz uma bagunça que é de outro mundo.")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
