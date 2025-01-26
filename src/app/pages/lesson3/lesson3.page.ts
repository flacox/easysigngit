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
    {title: 'Los números del 0 al 30', 
     thumb: "../assets/img/vocabulario.png", 
     url: '../assets/videos/14 numeros del 0 al 30.mp4',
     description: 'A continuación, aprenderemos los números del 0 al 30 por parte de Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
     
     {title: 'Números desde el 31 al 60', 
     thumb: "../assets/img/temporales.png", 
     url: '../assets/videos/15 numeros del 31 al  60.mp4',
     description: 'A continuación, aprenderemos los números del 31 al 60, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
    
     {title: 'Numeros del 61 al 99', 
     thumb: "../assets/img/temporales.png", 
     url: '../assets/videos/16 numeros del 61 al 99.mp4',
     description: 'A continuación, aprenderemos los números del 61 al 99, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },

    {title: 'Los Números desde 100 hasta 900.000', 
      thumb: "../assets/img/vocabulario.png", 
      url: '../assets/videos/17 numeros del 100 al 900mil.mp4',
      description: 'A continuación, aprenderemos los números del 100 hasta 900.000, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },

     {title: 'Números desde 1.000.000 hasta 900.000.000', 
      thumb: "../assets/img/temporales.png", 
      url: '../assets/videos/18 numeros del 1millon al 900millones.mp4',
      description: 'A continuación, aprenderemos los números del 1000000 hasta 900000000, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
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
