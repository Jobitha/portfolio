import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ProtfolioModule } from './protfolio/protfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    ProtfolioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProtfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
