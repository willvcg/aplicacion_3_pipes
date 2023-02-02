import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// Hora local en españa
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
import localeFr from '@angular/common/locales/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarPipe } from './pipes/ocultar.pipe'
registerLocaleData(localeEs)
registerLocaleData(localeFr)
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    OcultarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
