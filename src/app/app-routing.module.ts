import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes : Routes = [
{path:'home', component: SliderComponent , title: 'Home Page'} ,
{path:'about', component: AboutComponent , title: 'About Page'} ,
{path:'skills', component: SkillsComponent , title: 'Skills Page'} ,
{path:'experience', component: TimelineComponent , title: 'Experience Page'} ,
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'**', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
