import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../film-list/Film';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached:  EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void{

    if (this.quantity < this.max ){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("se alcanzo el maximo");
    }
    
  }
  downQuantity(): void{
    if(this.quantity >0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event): void{
    if(this.quantity > this.max) {
      alert("No hay mas copias disponibles");
      this.quantityChange.emit(this.quantity);
    }
    if(this.quantity < 0) {
      alert("No se pueden encargar copias negativas ");
      this.quantityChange.emit(this.quantity);
    }
    this.quantity = 0;
  }

}
