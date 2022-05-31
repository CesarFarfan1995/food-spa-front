import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private orderSvc:OrderDetailsService) { }

  foodData!:ProductInterface[];

  ngOnInit(): void {
    this.orderSvc.getProducts().subscribe(products => this.foodData = products)
  }

}
