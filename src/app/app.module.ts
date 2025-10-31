import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { OffcanvasNavbarComponent } from './offcanvas-navbar/offcanvas-navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WorkComponent } from './work/work.component';
import { WorkGalleryComponent } from './work-gallery/work-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    OffcanvasNavbarComponent,
    SkillsComponent,
    ExperienceComponent,
    TimelineComponent,
    WorkComponent,
    WorkGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
