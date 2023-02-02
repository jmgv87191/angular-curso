import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'iron-man';
    edad: number = 45;

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(){
        this.edad = 30;
    }

}
