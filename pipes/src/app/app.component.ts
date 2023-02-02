import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitán América";
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10]
  PI: number = Math.PI
  decimal: number = 0.245
  salario: number = 1.23422354
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverie',
    direccion: {
      calle: 'Primera',
      numero: 20
    }
  }
  promesa: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Ha regresado la data")
    }, 3400);
  })
  persona: Object = {
    nombre: "Logan",
    edad: 35,
    direccion: "Alicante, España"
  }
  fecha: Date = new Date()
  idioma: string = 'es'
  nombre2: string = 'wiLMan viniCio cUmbicus'
  urlSegura: string = "https://www.youtube.com/embed/FtrwURas9aQ"
  activar: boolean = true
  // cambiarIdioma(idioma: string){
  //   this.idioma = idioma
  // }
}
