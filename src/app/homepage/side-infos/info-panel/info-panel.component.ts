import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  @Input() information:Info;
  
  constructor() { }

  ngOnInit() {
  }

}
