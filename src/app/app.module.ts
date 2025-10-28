import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { OffcanvasNavbarComponent } from './offcanvas-navbar/offcanvas-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    OffcanvasNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
