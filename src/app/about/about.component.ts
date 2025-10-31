import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  AboutCardsData: Array<{ title: string; color: string; icon: string }> = [
    { title: 'GIS Development', color: 'primary', icon: '<i class="fa-solid fa-map-location-dot"></i>' },
    { title: 'Data Analysis', color: 'secondary', icon: '<i class="fa-solid fa-chart-bar"></i>' },
    { title: 'Web Development', color: 'success', icon: '<i class="fa-solid fa-code"></i>' },
    { title: 'Survey', color: 'info', icon: '<i class="fa-solid fa-code"></i>' }
  ];
}
