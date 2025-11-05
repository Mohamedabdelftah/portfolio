import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
 SliderContent:Array<{imageUrl: string, fh1: string, fh2: string, buttonText: string}> = [
   {
     imageUrl: 'assets/home/aerial-view-lausanne-switzerland.jpg',
     fh1: 'Hi',
     fh2: 'Friends Welcome to my Portfolio',
     buttonText: 'Dowload CV',
   },
    {
     imageUrl: 'assets/home/pexels-john-jackson-52736-190364.jpg',
     fh1: "I'm ",
     fh2: 'Mohamed Abdelfattah',
     buttonText: 'Dowload CV',
   },
   {
     imageUrl: 'assets/home/pexels-thepaintedsquare-4200831.jpg',
     fh1: 'I work as ',
     fh2: 'a GIS Engineer',
     buttonText: 'Dowload CV',
   }
 ];


  downloadPdf() : void {
    console.log('Download button clicked');
    const driveLink = 'https://drive.google.com/file/d/1-OnpU_bousFNL87JWvOmlq0mXLC5nk4u/view?usp=sharing';

    const fileIdMatch = driveLink.match(/\/d\/(.*?)\//);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;

    if (!fileId) {
      console.error('Invalid Google Drive link');
      return;
    }

    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'MohamedAbdelfattah.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('Download button Ended');
  }
}

