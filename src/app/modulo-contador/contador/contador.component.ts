import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = 'Contador APP';
  numeroContador: number =0;
  base: number = 5;
  aumentar(valor: number) {
  
  this.numeroContador+=valor;
  }
}
