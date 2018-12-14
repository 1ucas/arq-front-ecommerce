import { ProductItem } from "../homepage/product-list/product-item/product-item";

export class ProductService {

    constructor() {
     }

     public GetProducts() {
        return [
            new ProductItem(1,"A vida de Matilda", "", "R$30,00", "O livro mais ditático sobre os assuntos comuns da vida.", 1),
            new ProductItem(2,"O Machado do Assis", "", "R$10,00", "Descrições da batalha de Assis usando seu novo Machado do trovão.", 1),
            new ProductItem(2,"O monge executivo", "", "R$15,00", "Um pensador das relações humanas resolve embarcar para o mundo dos negócios.", 1),
            new ProductItem(2,"Memórias Póstumas de Silvio", "", "R$40,00", "Grande crítica ao Brasil narrada por um falecido apresentador de TV.", 1),
            new ProductItem(3,"Harry Potter", "E a pedra da Filosofia", "R$20,00", "Descubra o mundo mágico de Happy Potter em sua primeira aventura.", 2),
            new ProductItem(4,"Senhor dos Aneis", "A Sociedade do Anel", "R$11,00", "Embarque nessa incrível aventura em busca do Anel secreto.", 2),
            new ProductItem(5,"Family Guy", "", "R$45,00", "Se emocione com as histórias dessa família que é da pesada.", 2),
            new ProductItem(6,"Beethoven", "O cão sapeca", "R$40,00", "Esse cãozinho faz uma bagunça que é de outro mundo.", 2)
        ];
     }
}