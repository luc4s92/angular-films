import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmCartService } from '../film-cart.service';
import { Film } from '../film-list/Film';

@Component({
  selector: 'app-film-cart',
  templateUrl: './film-cart.component.html',
  styleUrls: ['./film-cart.component.scss']
})
export class FilmCartComponent implements OnInit {

  cartList$: Observable<Film []> ;
  constructor(private cart: FilmCartService) {
      this.cartList$ = cart.cartList.asObservable();
   }
      ngOnInit(): void {
  }

}
