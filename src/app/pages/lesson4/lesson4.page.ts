import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.page.html',
  styleUrls: ['./lesson4.page.scss'],
})
export class Lesson4Page implements OnInit {
  constructor(private loadingController: LoadingController, private navCtrl: NavController) { }
  
    irAPantalla(ruta: string) {
      this.navCtrl.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
    }
    
  async ionViewWillEnter() {
    // Mostrar el loading spinner
    const loading = await this.loadingController.create({
      message: 'Cargando Lección 4...',
      spinner: 'bubbles', // Tipo de spinner
      duration: 1500,     // Ocultar automáticamente después de 1.5 segundos
    });
    await loading.present();
  }

    // Lista de videos con ID y descripción
    videos = [
      { id: 'RLzVOiF4duE', description: 'Introducción a los números básicos del números 1 al 10' },
      { id: 'lsNAqr-b0-g', description: 'Explicación más interactiva de los números básicos del números 1 al 10' },
      { id: 'GyYJq7-TG2o', description: 'Explicación más interactiva de los números básicos del números 1 al 20' },
      { id: 'jZstATb70GU', description: 'Explicación más interactiva de los números básicos del números 21 al 40' },
      { id: 'PseEipz-iGU', description: 'Explicación más interactiva de los números básicos del números 40 al 60' },
      { id: 'grlD2DsN00M', description: 'Explicación más interactiva de los números básicos del números 60 al 80' },
      { id: 'mTyg1Op4Xfo', description: 'Explicación más interactiva de los números básicos del números 80 al 100' },
      { id: 'sERfNYaY1Nw', description: 'Explicación más interactiva de los números básicos del números 100 al 1000' },
    ];
    players: any[] = []; // Almacena las instancias de los reproductores

  ngOnInit() {
    this.loadYouTubeAPI();
  }
  loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  
    (window as any).onYouTubeIframeAPIReady = () => {
      this.videos.forEach((video, index) => {
        const player = new (window as any).YT.Player(`player${index}`, {
          height: '100%', // Ajusta al contenedor
          width: '100%', // Ajusta al contenedor
          videoId: video.id,
          playerVars: {
            rel: 0,              // Evita videos relacionados al final
            modestbranding: 1,   // Oculta el logo de YouTube
            controls: 1,         // Muestra solo controles básicos
            iv_load_policy: 3,   // Oculta anotaciones interactivas
            disablekb: 0,        // Desactiva el teclado
            playsinline: 1,      // Reproduce en línea en móviles
            fs: 1,               // Habilita pantalla completa
            autoplay: 0,         // Evita reproducción automática
            hl: 'es',            // Configura el idioma en español
          },
          events: {
            onReady: this.onPlayerReady,
            onStateChange: (event: any) => this.onPlayerStateChange(event, player),
          },
        });
        this.players.push(player);
      });
    };
  }
  onPlayerReady(event: any) {
    event.target.setVolume(30); // Opcional: configura el volumen inicial
    }
    onPlayerStateChange(event: any, player: any) {
      // Detecta el final del video
      if (event.data === (window as any).YT.PlayerState.ENDED) {
        // Reinicia el video automáticamente si deseas
        player.seekTo(0); // Reinicia el video al inicio
        player.pauseVideo(); // Pausa el video para que no se reproduzca automáticamente
      }
    }
}
