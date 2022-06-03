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
  private isAdmin = new BehaviorSubject<boolean>(false);

  private subscription:Subscription = new Subscription();
   userLogin!:LoginInterface

  constructor(private readonly http:HttpClient, private cookieSvc:CookieService, private router: Router) { 
    this.checkToken()
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable()
  }

  get admin(): Observable<boolean>{
    return this.isAdmin.asObservable()
  }

  loginUser(userData:LoginInterface):any{
    this.subscription.add(
    this.http.post<UserData>(`${environment.apiUrl}auth/login`, userData).subscribe(({token,user, roles}) =>{
    this.cookieSvc.set('token', token)
    this.loggedIn.next(true)
    const role = roles.filter(value => value === 'admin')
    user = {...user, phone:user.phone.toString()}
    this.cookieSvc.set('user', JSON.stringify(user))
    console.log(role)
    if(role.length > 0){
      this.isAdmin.next(true)
    }
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
    this.isAdmin.next(false)
    this.router.navigate(['/'])


  }

  destroySub():void{
    this.subscription.unsubscribe()
  }

  registerUser(userData:UserInterface){

   
   this.http.post<LoginInterface>(`${environment.apiUrl}auth/register`, userData).subscribe((user) => {
     const dataUser = { email: user.email, password: user.password };
     this.userLogin = dataUser;


   })

  

  }



}
