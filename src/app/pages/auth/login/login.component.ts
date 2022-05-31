import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginInterface, UserData, UserInterface } from '../interfaces/user.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private authSvc:AuthService, private cookieSvc:CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(form:LoginInterface){


   this.authSvc.loginUser(form)


  }





}
