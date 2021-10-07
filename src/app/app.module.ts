import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Enable HTTP
//import { HttpClientModule } from '@angular/common/http';

import { BottomMessageComponent } from './bottom-message/bottom-message.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BangVangComponent } from './bang-vang/bang-vang.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomMessageComponent,
    HeroesComponent,
    BangVangComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
