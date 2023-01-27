
import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponet{

    nombre: string = 'iroman';
    edad: number = 45;

    get capitalizedName(){
        return this.nombre.toUpperCase();
    }

    ObtainName(): string {
        return `yo soy ${this.nombre} - mi edad es ${this.edad}`;
    }

    changeName(): void {
        this.nombre = 'SpiderMan';
    }

    changeAge(): void {
        this.edad = 23;
    }
}