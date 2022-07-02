import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxI24ColoredLightsModule } from 'projects/ngx-i24-colored-lights/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxI24ColoredLightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
