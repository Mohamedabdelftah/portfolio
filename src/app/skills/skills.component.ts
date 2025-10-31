import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsCardsData:Array<{title:string, value:number , color:string}> = [
    {
      title: 'Web Development',
      value: 80,
      color: 'primary'
    },
    {
      title: 'GIS Analysis',
      value: 70,
      color: 'success'
    },
    {
      title: 'API Integration',
      value: 90,
      color: 'info'
    },
    {
      title: 'Database Management',
      value: 60,
      color: 'warning'
    },{
      title: 'Data Visualization',
      value: 75,
      color: 'danger'
    },{
      title: 'Problem Solving',
      value: 85,
      color: 'secondary'
    }
  ];
}
