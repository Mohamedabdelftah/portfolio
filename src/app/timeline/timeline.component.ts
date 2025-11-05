import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  experienceData: Array<{Logo: string,CompanyName: string,Start: string,End: string,Position: string,Description: string}> = [
    {
      Logo: 'https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/473193928_1125905869541302_4044689635104564071_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFMeNuBKu1Iu9se9A4WnUH7sHDCZ_C9oq-wcMJn8L2ir1ojQ4NoEUAVKYnce-ezd3PjdJMERRGzqqlnWszReyvW&_nc_ohc=TsYh2oDsEp4Q7kNvwE3KfMm&_nc_oc=AdlTWIB7RSJMfTtoGsTU-Qhny-Bczu-jZONEmhPlGP9ttZ79t38TLNEcS9Df0oF1AwM&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=dsB26gI4KIpqQOL1BuUvgg&oh=00_Afgt96VJonS0bXQvqjnP1Y521ueecj55zuYq4ESQ7H_TsA&oe=690DAB51',
      CompanyName: 'Al Qemam',
      Start: new Date('2025-11-16').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End:'Present',
      Position: 'GIS Developer',
      Description: 'Developing and maintaining GIS applications using various technologies. Collaborating with cross-functional teams to deliver geospatial solutions.'
    },
    {
      Logo: 'https://itechs-di.ai/assets/img/navMobile.png',
      CompanyName: 'iTechs DI',
      Start: new Date('2024-09-22').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End: new Date('2025-11-13').toLocaleString('default', { month: 'long', year: 'numeric' }),
      Position: 'GIS Dev and Admin Engineer',
      Description: 'Managed GIS infrastructure and developed custom GIS applications. Provided technical support and training to end-users.'
    },
    {
      Logo: 'https://www.pngfind.com/pngs/m/683-6835245_esri-logo-clipart-png-download-esri-logo-svg.png',
      CompanyName: 'Esri North Africa',
      Start: new Date('2022-08-01').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End: new Date('2024-09-21').toLocaleString('default', { month: 'long', year: 'numeric' }),
      Position: 'Platform Technical Support Engineer',
      Description: 'Provided technical support for Esri\'s GIS platform, assisting clients with troubleshooting and resolving issues. Delivered training sessions to enhance user proficiency.'
    },
    {
      Logo: 'https://www.qsitint.com/wp-content/uploads/2021/08/Qsit_Logo_Header_05.png',
      CompanyName: 'Quality Standards for Information Systems (QSIT)',
      Start: new Date('2021-01-01').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End: new Date('2021-10-01').toLocaleString('default', { month: 'long', year: 'numeric' }),
      Position: 'GIS Specialist',
      Description: 'Implemented GIS solutions for various projects, including data analysis and map creation. Collaborated with clients to understand their geospatial needs and deliver tailored solutions.'
    },{
      Logo: 'https://petrojet.com.eg/assets/imgs/petrojet-logo.png',
      CompanyName: 'Petrojet',
      Start: new Date('2020-03-02').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End: new Date('2020-12-30').toLocaleString('default', { month: 'long', year: 'numeric' }),
      Position: 'GIS & Survey Engineer',
      Description: 'Conducted geospatial surveys and data collection for infrastructure projects. Utilized GIS software to analyze and visualize survey data for project planning and execution.'
    },{
      Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Egyptian_Air_Force_emblem.svg/330px-Egyptian_Air_Force_emblem.svg.png',
      CompanyName: 'Egyptian Air Force',
      Start: new Date('2019-01-01').toLocaleString('default', { month: 'long', year: 'numeric' }),
      End: new Date('2020-03-01').toLocaleString('default', { month: 'long', year: 'numeric' }),
      Position: 'GIS & Survey Engineer',
      Description: 'Provided GIS support for Infrastructure projects, including mapping and spatial analysis. Collaborated with various units to deliver geospatial intelligence.'
    }
  ];
}
