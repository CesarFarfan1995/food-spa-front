import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from '../auth/interfaces/user.interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user!:UserInterface

  constructor(private authSvc:AuthService, private cookieSvc:CookieService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.authSvc.destroySub()
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
