import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { AuthService } from 'src/app/services/auth.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { UserInterface } from '../auth/interfaces/user.interfaces';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private router: ActivatedRoute,
     private orderSvc:OrderDetailsService,
     private authSvc:AuthService,
     private cookieSvc:CookieService) { }

  id:any;
  foodData!:ProductInterface;
  user!:UserInterface;

  ngOnInit(): void {

    this.id = this.router.snapshot.paramMap.get('id');

    if(this.id){

      this.orderSvc.getProduct(this.id).subscribe(product => this.foodData = product)

     console.log(this.foodData)

    }


  }

  isLogin(){
    const isLogin = this.authSvc.isLogged
    const userData = this.cookieSvc.get('user')
     if(userData){
       this.user = JSON.parse(userData)
     }
    return isLogin
   }

}
