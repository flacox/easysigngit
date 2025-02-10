import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  firebaseService = inject(FirebaseService);

   
signOut(){
    this.firebaseService.signOut();
  }

  videoList = [
    {title: 'Thank You', 
     thumb: "../assets/img/thankyou.PNG", 
     url: 'https://videos.pexels.com/video-files/5211961/5211961-uhd_2560_1440_25fps.mp4',
     description: 'Chica diciendo gracias'
    }
  ]

  constructor(private modalController: ModalController, private navCtrl: NavController) { }
        
          irAPantalla(ruta: string) {
            this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
          }

  async playVideo(videoUrl: string, videoDescription: string){
      const modal = await this.modalController.create({
        component: VideoModalComponent,
        componentProps: { videoUrl, videoDescription },
      });
      await modal.present();
    }


  ngOnInit() {
  }

}
