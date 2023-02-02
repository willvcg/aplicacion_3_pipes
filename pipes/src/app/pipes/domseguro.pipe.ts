import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    console.log("domseguro"+value)

    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
