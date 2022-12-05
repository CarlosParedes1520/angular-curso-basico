import { Component } from '@angular/core';
import { HeroesP } from 'src/app/interfaces/HeroesP';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroes: string[] = ['batman','superman','spiderman'] 
 heroeBorrado: string = ''
  
  
  heroe1: HeroesP ={
    nombre: 'spiderman',
    edad: 55,
    ciudad: 'new work'
  }
  heroe2: HeroesP ={
    nombre: 'hulk',
    edad: 36,
    ciudad: 'LA'
  }
  heroe3: HeroesP ={
    nombre: 'superman',
    edad: 55,
    ciudad: 'DC'
  }

  HeroesPErsona : HeroesP  []= [this.heroe1,this.heroe2,this.heroe3];

  borrarHeroe(){

   
    this.heroeBorrado = this.heroes.pop() || '' 
  }
}
