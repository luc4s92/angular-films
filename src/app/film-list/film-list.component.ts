import { Component, OnInit } from '@angular/core';
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

  
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(film: Film): void{
    if(film.quantity < film.stock )
    film.quantity++;
  }
  downQuantity(film: Film): void{
    if(film.quantity >0)
    film.quantity--;
  }

  changeQuantity(event, film: Film): void{
    if(film.quantity > film.stock) {
      alert("No hay mas copias disponibles");
    }
    if(film.quantity < 0) {
      alert("No se pueden encargar copias negativas ");
    }
    film.quantity = 0;
  }

}
