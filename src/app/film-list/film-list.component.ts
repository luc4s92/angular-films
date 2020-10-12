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
        },
        {
          title: "Avenger",
          gender: "Ciencia ficcion",
          price: 100,
          stock: 4,
          image: "assets/img/wick.jpg",
          recomend: true,
        },
        {
          title: "Avatar",
          gender: "accion",
          price: 100,
          stock: 0,
          image: "assets/img/wick.jpg",
          recomend: false,
        },

  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
