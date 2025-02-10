import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.page.html',
  styleUrls: ['./lesson1.page.scss'],
})
export class Lesson1Page {

  videoList = [
    {title: 'Vocabulario', 
     thumb: "../assets/img/vocabulario.png", 
     url: '../assets/videos/1 LSE Vocabulario.mp4',
     description: 'Primeros pasos con el vocabulario por parte de Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
     
     {title: 'Los Colores', 
     thumb: "../assets/img/colores.png", 
     url: '../assets/videos/2 LSE Colores.mp4',
     description: 'A continuación, aprenderemos los colores por parte de Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
    
     {title: 'Dias de la Semana', 
     thumb: "../assets/img/dias de la semana.png", 
     url: '../assets/videos/3 LSE Dias de la semana.mp4',
     description: 'A continuación, aprenderemos los días de la semana, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
     {title: 'Meses del año', 
     thumb: "../assets/img/meses.png", 
     url: '../assets/videos/4 LSE Meses.mp4',
     description: 'A continuación, aprenderemos los meses, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
    {title: 'Los temporales del día', 
      thumb: "../assets/img/temporales.png", 
      url: '../assets/videos/5 LSE temporales del dia.mp4',
      description: 'A continuación, aprenderemos los temporales del día, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },
  ]

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  irAPantalla(ruta: string) {
    this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
  }

  async playVideo(videoUrl: string, videoDescription: string, title: string){
    const modal = await this.modalController.create({
      component: VideoModalComponent,
      componentProps: { videoUrl, videoDescription, title },
    });
    await modal.present();
  }

}
