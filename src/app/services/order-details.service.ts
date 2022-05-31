import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }



getProducts():Observable<ProductInterface[]>{

return this.http.get<ProductInterface[]>(`${environment.apiUrl}products`)

}

getProduct(id:string){
  return this.http.get<ProductInterface>(`${environment.apiUrl}products/${id}`)
}


}
