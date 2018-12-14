export class Info {
    titulo:String;
    corpo:String;
    ehDestaque:Boolean;
    ehAlerta:Boolean;

    constructor(titulo, corpo, destaque, alerta) {
        this.titulo = titulo;
        this.corpo = corpo;
        this.ehDestaque = destaque;
        this.ehAlerta = alerta;
     }
}