import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface, UserData, UserInterface } from '../pages/auth/interfaces/user.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable,Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class AuthService {


  private loggedIn = new BehaviorSubject<boolean>(false);

  private subscription:Subscription = new Subscription();
tempUser!:UserInterface

  constructor(private readonly http:HttpClient, private cookieSvc:CookieService, private router: Router) { 
    this.checkToken()
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable()
  }
  // get userinfo():Observable<UserInterface>{
  //   return this.user.asObservable()
  // }

  loginUser(userData:LoginInterface):any{
    this.subscription.add(
    this.http.post<UserData>(`${environment.apiUrl}auth/login`, userData).subscribe(({token,user}) =>{
    this.cookieSvc.set('token', token)
    this.loggedIn.next(true)
    user = {...user, phone:user.phone.toString()}
    this.cookieSvc.set('user', JSON.stringify(user))
    if(user && token){
      
      this.router.navigate(['/'])
    } 
   
    
  }))

  }


  checkToken(){
    const token = this.cookieSvc.get('token')
    const isExpired = helper.isTokenExpired(token)

    if(isExpired){
      this.logoutUser()
    }else{
      this.loggedIn.next(true)
      // this.user.next(this.user.getValue())
   
  }
}


  logoutUser(){
    this.cookieSvc.delete('token')
    this.cookieSvc.delete('user')
    this.loggedIn.next(false)
    this.router.navigate(['/'])


  }

  destroySub():void{
    this.subscription.unsubscribe()
  }



}
