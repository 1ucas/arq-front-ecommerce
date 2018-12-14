import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../homepage/product-list/product-item/product-item';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {

  @Input() produto:ProductItem;

  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.produto = new ProductService().GetProducts().filter((el) => { return el.id == params['id']})[0];
    });
  }

}
