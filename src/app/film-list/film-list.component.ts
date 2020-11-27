import { Component, OnInit } from '@angular/core';
import { FilmCartService } from '../film-cart.service';
import {Film} from './Film';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film []= [
      {
          title: "John Wick",
          gender: "accion",
          price: 100,
          stock: 5,
          image: "assets/img/wick.jpg",
          recomend: false,
          quantity: 0,
        },
        {
          title: "Avenger",
          gender: "Ciencia ficcion",
          price: 100,
          stock: 4,
          image: "assets/img/wick.jpg",
          recomend: true,
          quantity: 0,
        },
        {
          title: "Avatar",
          gender: "accion",
          price: 100,
          stock: 0,
          image: "assets/img/wick.jpg",
          recomend: false,
          quantity: 0,
        },
        {
          title: "Dirty Harry",
          gender: "accion",
          price: 90,
          stock: 0,
          image: "assets/img/wick.jpg",
          recomend: true,
          quantity: 0,
        },

  ];
  
 
  
  constructor(private cart: FilmCartService ) { 
    this.cart ;
  }

  ngOnInit(): void {
  }

  
  maxReached(m: string){
    alert(m);
  }
 
  addToCart(film):void{
    this.cart.addToCart(film);
    film.stock -= film.quantity;
    film.quantity = 0;
  }

  


}
