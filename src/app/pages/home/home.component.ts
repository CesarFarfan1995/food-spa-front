import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private orderSvc: OrderDetailsService) { }
  foodData!:ProductInterface[];

  ngOnInit(): void {

    this.orderSvc.getProducts().subscribe(products => this.foodData = products)

  }

}
