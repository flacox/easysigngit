import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.page.html',
  styleUrls: ['./lesson2.page.scss'],
})
export class Lesson2Page { 

  videoList = [
    {title: 'Thank You', 
     thumb: "../assets/img/thankyou.PNG", 
     url: 'https://videos.pexels.com/video-files/5211961/5211961-uhd_2560_1440_25fps.mp4',
     description: 'Chica diciendo gracias'
    },
     
     {title: 'What and Why', 
     thumb: "../assets/img/whatandwhy.PNG", 
     url: 'https://videos.pexels.com/video-files/5907337/5907337-uhd_2560_1440_25fps.mp4',
     description: 'Mujer preguntando que y porque'
    },
    
     {title: 'Gracias por lenguaje de señas', 
     thumb: "../assets/img/video3.jpg", 
     url: 'https://media.istockphoto.com/id/1224328133/es/v%C3%ADdeo/mujer-asi%C3%A1tica-mirando-a-la-c%C3%A1mara-feliz-sonriendo-y-decir-gracias-por-lenguaje-de-se%C3%B1as.mp4?s=mp4-640x640-is&k=20&c=mohfJUDgK2Y7jwNHGvwzZOF0zVCsNmwOyrONPxk1J8U=',
     description: 'Mujer asiatica, dando gracias por el lenguaje de señas'
    },
  ]

  constructor(private modalController: ModalController) { }

  async playVideo(videoUrl: string, videoDescription: string){
    const modal = await this.modalController.create({
      component: VideoModalComponent,
      componentProps: { videoUrl, videoDescription },
    });
    await modal.present();
  }

}
