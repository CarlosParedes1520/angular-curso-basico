import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ModuloContadorModule } from './modulo-contador/modulo-contador.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ModuloContadorModule,
    HeroesModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
