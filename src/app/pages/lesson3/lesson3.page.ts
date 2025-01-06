import { Component } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.page.html',
  styleUrls: ['./lesson3.page.scss'],
})
export class Lesson3Page {

  videoList = [
    {title: 'Padre sordo e hijo adolescente', 
     thumb: "../assets/img/video1.jpg", 
     url: 'https://media.istockphoto.com/id/1412163743/es/v%C3%ADdeo/padre-sordo-e-hijo-adolescente-conversando-en-casa.mp4?s=mp4-640x640-is&k=20&c=U11CFw-nc0qTZTQGQ7IvodQLaWQn3Ll4ZPVfqiwA6Pk=',
     description: 'Padre sordo de hijo adolescente, teniendo una conversacion'
    },
     
     {title: 'Videollamada con un amigo', 
     thumb: "../assets/img/video2.jpg", 
     url: 'https://media.istockphoto.com/id/1372579312/es/v%C3%ADdeo/joven-sordo-sonriente-firmando-durante-una-videollamada-con-un-amigo.mp4?s=mp4-640x640-is&k=20&c=k-TznjRZ7TGLMiG-BYuqefFnMQidRwxYLPFtKgsAyPA=',
     description: 'Hombre joven sordo en una videollamada'
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
