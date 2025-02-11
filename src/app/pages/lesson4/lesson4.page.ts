import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.page.html',
  styleUrls: ['./lesson4.page.scss'],
})
export class Lesson4Page implements OnInit {
  constructor(private loadingController: LoadingController, private navCtrl: NavController) {}

  players: any[] = []; // Almacena las instancias de los reproductores

  videos = [
    { id: 'RLzVOiF4duE', description: 'Introducción a los números básicos del 1 al 10' },
    { id: 'lsNAqr-b0-g', description: 'Explicación interactiva de los números básicos del 1 al 10' },
    { id: 'GyYJq7-TG2o', description: 'Explicación interactiva de los números básicos del 1 al 20' },
    { id: 'jZstATb70GU', description: 'Explicación interactiva de los números básicos del 21 al 40' },
    { id: 'PseEipz-iGU', description: 'Explicación interactiva de los números básicos del 40 al 60' },
    { id: 'grlD2DsN00M', description: 'Explicación interactiva de los números básicos del 60 al 80' },
    { id: 'mTyg1Op4Xfo', description: 'Explicación interactiva de los números básicos del 80 al 100' },
    { id: 'sERfNYaY1Nw', description: 'Explicación interactiva de los números básicos del 100 al 1000' },
  ];

  ngOnInit() {
    this.loadYouTubeAPI();
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando Lección 4...',
      spinner: 'bubbles',
      duration: 1500,
    });
    await loading.present();
    
    this.restartVideos(); // Recargar los videos al entrar nuevamente
  }

  ionViewWillLeave() {
    this.destroyPlayers(); // Eliminar los reproductores al salir de la página
  }

  loadYouTubeAPI() {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      this.restartVideos();
    };
  }

  restartVideos() {
    this.destroyPlayers(); // Asegurar que no haya instancias anteriores
    this.videos.forEach((video, index) => {
      const player = new (window as any).YT.Player(`player${index}`, {
        height: '100%',
        width: '100%',
        videoId: video.id,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          controls: 1,
          iv_load_policy: 3,
          disablekb: 0,
          playsinline: 1,
          fs: 1,
          autoplay: 0,
          hl: 'es',
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: (event: any) => this.onPlayerStateChange(event, player),
        },
      });
      this.players.push(player);
    });
  }

  destroyPlayers() {
    this.players.forEach(player => {
      if (player.destroy) {
        player.destroy();
      }
    });
    this.players = []; // Vacía la lista de reproductores
  }

  onPlayerReady(event: any) {
    event.target.setVolume(30);
  }

  onPlayerStateChange(event: any, player: any) {
    if (event.data === (window as any).YT.PlayerState.ENDED) {
      player.seekTo(0);
      player.pauseVideo();
    }
  }

  irAPantalla(ruta: string) {
    this.navCtrl.navigateRoot(ruta);
  }
}
