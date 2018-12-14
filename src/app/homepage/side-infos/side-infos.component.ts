import { Component, OnInit, Input } from '@angular/core';
import { Info } from './info';

@Component({
  selector: 'app-side-infos',
  templateUrl: './side-infos.component.html',
  styleUrls: ['./side-infos.component.css']
})
export class SideInfosComponent implements OnInit {

  @Input() informacoes:Info[] = [
            new Info("Última Atualização", "11/12/2018", true, false),
            new Info("Livro mais recente", "Harry Potter e a pedra filosofante", false, false),
            new Info("Livro mais comprado", "Como fazer um site em 3 dias", false, false),
            new Info("Atenção", "Cartão de Crédito fora do ar até a próxima segunda-feira", false, true)
          ];

  constructor() { }

  ngOnInit() {
  }

}
