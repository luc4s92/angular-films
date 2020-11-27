import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from './film-list/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmCartService {
  private _cartList: Film[] = [];
  cartList: BehaviorSubject<Film[]> = new BehaviorSubject([]);
  constructor() { }


  addToCart(film: Film) {
    let item: Film = this._cartList.find((v1) => v1.title == film.title);
    if(!item){
      this._cartList.push({... film});
    }else{
      item.quantity += film.quantity;
    }
    
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  
}
