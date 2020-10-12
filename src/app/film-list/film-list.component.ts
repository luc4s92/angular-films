import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  film = {
    "title": "John Wick",
    "gender": "accion",
    "price": 100,
    "stock": 10,
    "image": "assets/img/wick.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
