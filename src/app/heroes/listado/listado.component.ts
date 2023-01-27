import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  

  heroes: string[] = ['spiderman','hulk','ironman','flash'];
  heroeBorrado: string  = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
