export class Info {
    titulo:String;
    corpo:String;
    ehDestaque:Boolean;
    ehAlerta:Boolean;
    ehProgress:Boolean;
    quantidadeProgress:Number;

    constructor(titulo, corpo, destaque, alerta, progress = false, quantidadeProgress = 0) {
        this.titulo = titulo;
        this.corpo = corpo;
        this.ehDestaque = destaque;
        this.ehAlerta = alerta;
        this.ehProgress = progress;
        this.quantidadeProgress = quantidadeProgress;
     }
}