import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmAboutComponent } from './film-about/film-about.component';
import { FilmBuyComponent } from './film-buy/film-buy.component';


const routes: Routes = [
  {path: '', redirectTo: 'films', pathMatch: 'full'},
  {path: 'films', component: FilmBuyComponent},
  {path: 'about', component: FilmAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
