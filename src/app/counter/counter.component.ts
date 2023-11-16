import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // Esta es la clase  para poner un counter la funcionalidad de aumentar y decrementar
  // La clave es siempre manejar por bloques y funcionalidades los componentes y no poner todo en una sola clase. Como bloques de lego
  // Lo que se hizo en esta clase es acomodar el codigo para crear un componente de contador que suma y decrementa, y resetea
  public counter: number = 10;

  changeBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
