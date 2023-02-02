import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, ocultar: boolean): string {
    // let devolver: string = ''
    // if(ocultar){
    //   for(let i = 0; i < value.length; i++){
    //     devolver+= '*'
    //   }
    // }else{
    //   devolver = value
    // }
    // return devolver;

    return ocultar ? ('*').repeat(value.length) : value
  }

}
