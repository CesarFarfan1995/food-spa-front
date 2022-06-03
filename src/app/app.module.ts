import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

import { AuthModule } from './pages/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './pages/auth/token.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EditProductComponent } from './pages/admin-dashboard/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenuPageComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    EditProductComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
