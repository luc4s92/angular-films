import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCartComponent } from './film-cart/film-cart.component';
import { FormsModule } from '@angular/forms';
import { FilmAboutComponent } from './film-about/film-about.component';
import { FilmBuyComponent } from './film-buy/film-buy.component';
import { HomeComponent } from './home/home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCartComponent,
    FilmAboutComponent,
    FilmBuyComponent,
    HomeComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
