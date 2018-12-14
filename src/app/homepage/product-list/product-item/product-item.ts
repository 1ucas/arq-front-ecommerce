export class ProductItem {
    id:Number;
    titulo:String;
    subtitulo:String;
    valor:String;
    descricao:String;
    tipo:Number;

    constructor(id, titulo, subtitulo, valor, descricao, tipo) {
        this.id = id,
        this.titulo = titulo;
        this.subtitulo = subtitulo,
        this.valor = valor;
        this.descricao = descricao;
        this.tipo = tipo;
     }
}