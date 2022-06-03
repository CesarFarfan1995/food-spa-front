import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from '../interfaces/user.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(user:UserInterface){
    this.authSvc.registerUser(user)
  }

}
