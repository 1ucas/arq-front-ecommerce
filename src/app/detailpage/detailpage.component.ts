import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../homepage/product-list/product-item/product-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {

  @Input() produto:ProductItem;

  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.produto = new ProductItem();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.produto.id = params['id'];
    });
  }

}
