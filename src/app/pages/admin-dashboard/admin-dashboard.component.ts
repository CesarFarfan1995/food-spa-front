import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {ProductInterface} from '../../interfaces/product.interface'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  foods!:ProductInterface[]

  navigation: NavigationExtras = {
    state: {}
  }

  constructor(private foodSvc:OrderDetailsService, private router:Router) { }

  ngOnInit(): void {
    this.foodSvc.getProducts().subscribe(products => this.foods = products)
  }

  onClickEdit(food:ProductInterface){
    this.navigation.state = food;
    this.router.navigate(['admin/edit'], this.navigation)

  }

}
