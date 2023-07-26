import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodApiService } from './foods/food-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotComponent } from './page-not/page-not.component';
import {UsersService} from './user/users.service';
import {SignsService} from './sign-up/signs.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FoodApiService,
              UsersService,
              SignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
