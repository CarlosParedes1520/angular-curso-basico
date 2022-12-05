import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre: string = 'car lin';
  edad: number = 27;


  datos(): string {


    return `el nombre es ${this.nombre} y la edad es ${this.edad}`
  }


  get nombreCapitalizado() {
    return this.nombre.toUpperCase()
  }

   cambiarNombre() {
    return this.nombre = 'frank'
  }


   cambiarEdad() {
    return this.edad = 55;
  }
}
