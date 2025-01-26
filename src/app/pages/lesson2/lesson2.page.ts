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
    {title: 'Verbos I', 
     thumb: "../assets/img/verbos.png", 
     url: '../assets/videos/6 LSE verbos.mp4',
     description: 'A continuación, aprenderemos los verbos en lengua de señas española A1, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
     
     {title: 'Verbos II', 
     thumb: "../assets/img/verbos.png", 
     url: '../assets/videos/7 Verbos.mp4',
     description: 'A continuación, la segunda parte de la clase de verbos en lengua de señas española A1, elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },
    
     {title: 'Negacion de verbos', 
     thumb: "../assets/img/negacion.png", 
     url: '../assets/videos/8 La negación de los verbos.mp4',
     description: 'A continuación, aprenderemos la negación de los verbos, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
    },

    {title: 'Preguntas cerradas', 
      thumb: "../assets/img/negacion.png", 
      url: '../assets/videos/9 Preguntas cerradas.mp4',
      description: 'A continuación, aprenderemos a realizar preguntas cerradas a través del video facilitado por Cristóbal López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },

     {title: 'Frases en futuro', 
      thumb: "../assets/img/futuro.png", 
      url: '../assets/videos/10 Frases de futuro.mp4',
      description: 'A continuación, aprenderemos a decir frases en futuro, clase impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },

     {title: 'Preguntas y respuestas I', 
      thumb: "../assets/img/preguntas.png", 
      url: '../assets/videos/11 Preguntas y respuestas.mp4',
      description: 'A continuación, aprenderemos a elaborar preguntas y respuestas, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },

     {title: 'Preguntas y respuestas II', 
      thumb: "../assets/img/preguntas.png", 
      url: '../assets/videos/12 Preguntas y respuestas II.mp4',
      description: 'A continuación, encontrarás la segunda parte de la clase "Preguntas y respuestas", impartida por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
     },

     {title: 'Los temporales en futuro', 
      thumb: "../assets/img/temporalesf.png", 
      url: '../assets/videos/13 Temporales de futuro.mp4',
      description: 'A continuación, aprenderemos como usar los temporales de futuro preguntas y respuestas, clase elaborada por el profesor de LSE Cristóbal López López de la Escuela de Formación e Innovación de la Administración Pública de la Región de Murcia.'
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
