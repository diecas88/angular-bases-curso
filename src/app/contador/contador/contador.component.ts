import { Component } from '@angular/core';



@Component({
    selector: 'app-contador',
    template: `

        <h1>{{title}}</h1>
        <h3>la base es {{base}}</h3>
        <button (click)="acumular(this.base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-this.base)">-{{base}}</button>
    
    `
})


export class ContadorComponent {

    title = 'contador app';

    numero: number = 10;
    base  : number = 5;
  
  
    acumular(valor: number) {
      this.numero += valor;
    }
}