import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ComunidadService } from '../../services/comunidad.service';
import { PublicacionModalComponent } from '../../components/publicacion-modal/publicacion-modal.component';
import { ComentariosModalComponent } from '../../components/comentarios-modal/comentarios-modal.component';


@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {
  publicaciones: any[] = [];
  filtroSeleccionado: string = 'recientes';
  usuarioFiltrado: string = '';
  filtroEtiqueta: string = '';


  constructor(
    private comunidadService: ComunidadService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController

  ) { }

  ngOnInit() {
  }

  //abrir comentarios
  async abrirComentarios(publicacion: any) {
    const modal = await this.modalController.create({
      component: ComentariosModalComponent,
      componentProps: { publicacionId: publicacion.id, publicacion }, // Pasa el objeto completo
    });
    await modal.present();
  }


  async ionViewWillEnter() {
    // Mostrar el loading cuando se accede a la pantalla
    const loading = await this.loadingController.create({
      message: 'Cargando comunidad...',
    });
    await loading.present();

    // Cargar las publicaciones
    this.comunidadService.getPublicaciones().subscribe(
      (data) => {
        this.publicaciones = data; // Actualizar las publicaciones
        loading.dismiss(); 
      },
      (error) => {
        loading.dismiss(); // Cerrar el loading en caso de error
        alert('Hubo un error al cargar las publicaciones.');
        console.error(error);
      }
    );
  }

  async abrirModal() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('user') || '{}');
    const modal = await this.modalController.create({
      component: PublicacionModalComponent,
      componentProps: {
        nombreUsuario: usuarioLogueado.name || 'Invitado',
      },
    });
    await modal.present();
  }

  // Obtener publicaciones con el filtro seleccionado
  obtenerPublicaciones() {
    if (this.filtroEtiqueta) {
      // Filtrar por etiqueta seleccionada
      this.comunidadService.getPublicacionesPorEtiqueta(this.filtroEtiqueta).subscribe(
        (data) => {
          console.log('Publicaciones con etiqueta:', this.filtroEtiqueta, data);
          if (data && data.length > 0) {
            this.publicaciones = data;
          } else {
            this.publicaciones = [];
            this.mostrarAlerta(`No se encontraron publicaciones con la etiqueta "${this.filtroEtiqueta}".`);
          }
        },
        (error) => {
          console.error('Error al cargar publicaciones con etiqueta:', error);
          this.mostrarAlerta('Ocurrió un error al intentar cargar las publicaciones.');
        }
      );
    } else {
      // Filtrar por criterio general (recientes, antiguas,)
      this.comunidadService.getPublicacionesConFiltro(this.filtroSeleccionado, this.usuarioFiltrado).subscribe(
        (data) => {
          this.publicaciones = data;
        },
        (error) => {
          console.error('Error al cargar publicaciones generales:', error);
          this.mostrarAlerta('Hubo un problema al cargar las publicaciones.');
        }
      );
    }
  }


  // Método para mostrar alertas más informativas
  async mostrarAlerta(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración de 3 segundos
      color: 'danger', // Fondo rojo
      position: 'bottom', // Mostrar en la parte superior
    });
    await toast.present();
  }

  // Cambiar el filtro
  cambiarFiltro(filtro: string) {
    this.filtroSeleccionado = filtro;
    this.usuarioFiltrado = ''; // Reiniciar filtro de usuario
    this.obtenerPublicaciones(); // Recargar publicaciones con el filtro nuevo
  }

}
