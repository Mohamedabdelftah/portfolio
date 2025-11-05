import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { OffcanvasNavbarComponent } from './offcanvas-navbar/offcanvas-navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WorkComponent } from './work/work.component';
import { WorkGalleryComponent } from './work-gallery/work-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    OffcanvasNavbarComponent,
    SkillsComponent,
    TimelineComponent,
    WorkComponent,
    WorkGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
