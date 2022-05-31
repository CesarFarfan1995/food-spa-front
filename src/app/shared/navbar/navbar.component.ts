import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInterface } from 'src/app/pages/auth/interfaces/user.interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  

  constructor(private authSvc:AuthService, private cookieSvc:CookieService) { }
  user!:UserInterface 
   
  ngOnInit(): void {
   
  
   
  }
   
   ngOnDestroy(): void {
    this.authSvc.destroySub()
  }

  onLogout():void{
    this.authSvc.logoutUser()
    
  }

  isLogin(){
   const isLogin = this.authSvc.isLogged
   const userData = this.cookieSvc.get('user')
    if(userData){
      this.user = JSON.parse(userData)
    }
   return isLogin
  }

  // userData(){
  //  return  this.authSvc.userinfo
  // }

}
