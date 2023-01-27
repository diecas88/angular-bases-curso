import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponet } from "./hero/hero.component";
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroComponet,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}