import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): any {

    let transformar: string = value.toLocaleLowerCase()
    let nombres: string[] = transformar.split(' ')
    console.log(nombres)
    let volver: string = ''
    if(todas){
      nombres = nombres.map( nombre => nombre[0].toLocaleUpperCase() + nombre.substring(1))
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1)
    }

    volver = nombres.join(' ')

    return volver;
  }

}
