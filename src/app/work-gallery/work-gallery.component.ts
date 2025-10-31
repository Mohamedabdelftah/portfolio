import { Component } from '@angular/core';

@Component({
  selector: 'app-work-gallery',
  templateUrl: './work-gallery.component.html',
  styleUrls: ['./work-gallery.component.css']
})
export class WorkGalleryComponent {
workGalleryData:Array<{image:string,
header:string ,
description:string,
views:number,
link:string,
likes:number
}> = [
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-2-D-4H1m4L.jpg',
    header: 'Project Alpha',
    description: 'A cutting-edge web application that revolutionizes user experience.',
    views: 1200,
    link: 'https://react-portfolio-gold-psi.vercel.app/assets/img-2-D-4H1m4L.jpg',
    likes: 300
  },
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg',
    header: 'Design Beta',
    description: 'An innovative design project focusing on minimalism and functionality.',
    views: 950,
    link: 'https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg',
    likes: 250
  },
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-4-tHccITd-.jpg',
    header: 'App Gamma',
    description: 'A mobile application that enhances productivity through smart features.',
    views: 800,
    link: 'https://react-portfolio-gold-psi.vercel.app/assets/img-4-tHccITd-.jpg',
    likes: 200
  },
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-3-pR2ZEVY9.jpg',
    header: 'Website Delta',
    description: 'A responsive website that offers seamless navigation and user engagement.',
    views: 1100,
    link: 'https://react-portfolio-gold-psi.vercel.app/assets/img-3-pR2ZEVY9.jpg',
    likes: 280
  },
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-6-DFW03AZ3.jpg',
    header: 'Tool Epsilon',
    description: 'A powerful tool designed to streamline workflows and increase efficiency.',
    views: 670,
    link: 'https://example.com/tool-epsilon',
    likes: 150
  },
  {
    image: 'https://react-portfolio-gold-psi.vercel.app/assets/img-5-lAucr__a.jpg',
    header: 'Service Zeta',
    description: 'A comprehensive service platform that connects users with top professionals.',
    views: 1300,
    link: 'https://react-portfolio-gold-psi.vercel.app/assets/img-5-lAucr__a.jpg',
    likes: 320
  }
];
}
