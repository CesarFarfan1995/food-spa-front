import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CheckloginGuard } from './shared/guards/checklogin.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'menu/:id',
    component:MenuPageComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'auth/register',
    component: RegisterComponent
  },
  {
    path:'auth/login',
    component: LoginComponent,
    canActivate:[CheckloginGuard]
  },
  {
    path:'profile',
    component: UserProfileComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
