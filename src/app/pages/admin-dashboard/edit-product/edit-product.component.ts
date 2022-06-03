import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  food!:any

  productForm!:FormGroup

  constructor(private router:Router, private fb:FormBuilder, private foodSvc:OrderDetailsService) {
    const navigation = this.router.getCurrentNavigation()
    this.food = navigation?.extras.state
   }

  ngOnInit(): void {
    this.initForm()
  }

  onSave(){
    this.foodSvc.updateProduct(this.food._id ,this.productForm.value)
    this.router.navigate(['admin'])
    
  }

  private initForm():void {
    this.productForm = this.fb.group({
      img: [this.food.img, [Validators.required]],
      name: [this.food.name, [Validators.required]],
      details: [this.food.details, [Validators.required]],
      price: [this.food.price, [Validators.required]],
    })
  }

}
