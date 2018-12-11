export class ProductItem {
    id:Number;
    titulo:String;
    subtitulo:String;
    valor:String;
    descricao:String;

    constructor(id?, titulo?, subtitulo?, valor?, descricao?) {
        this.id = id,
        this.titulo = titulo;
        this.subtitulo = subtitulo,
        this.valor = valor;
        this.descricao = descricao;
     }
}