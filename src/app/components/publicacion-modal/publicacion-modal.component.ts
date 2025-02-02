import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ComunidadService } from '../../services/comunidad.service';

@Component({
  selector: 'app-publicacion-modal',
  templateUrl: './publicacion-modal.component.html',
  styleUrls: ['./publicacion-modal.component.scss'],
})
export class PublicacionModalComponent implements OnInit {
  @Input() nombreUsuario: string = 'Invitado';

  publicacion = {
    titulo: '',
    contenido: '',
    fecha: new Date(),
    etiquetas: [] as string[],
  };

  etiquetasDisponibles: string[] = ['Educación', 'Tutorial', 'Pregunta', 'Experiencia', 'Consejo'];


  constructor(
    private modalController: ModalController,
    private comunidadService: ComunidadService,
    private toastController: ToastController,
    private loadingController: LoadingController) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async publicar() {
    if (this.publicacion.titulo && this.publicacion.contenido) {

      // Mostrar el loading
      const loading = await this.loadingController.create({
        message: 'Publicando...',
      });
      await loading.present();

      // Guardar la publicación en Firebase
      this.comunidadService.addPublicacion({
        ...this.publicacion,
        nombreUsuario: this.nombreUsuario,
      }).then(() => {
        loading.dismiss(); // Cerrar el loading
        this.cerrarModal();
      })
        ;
    } else {
      this.mostrarAlerta('Por favor, completa todos los campos.');
    }
  }

  toggleEtiqueta(etiqueta: string) {
    if (this.publicacion.etiquetas.includes(etiqueta)) {
      // Si la etiqueta ya está seleccionada, la eliminamos
      this.publicacion.etiquetas = this.publicacion.etiquetas.filter((e) => e !== etiqueta);
    } else {
      // Si no está seleccionada, la añadimos
      this.publicacion.etiquetas.push(etiqueta);
    }
  }

  async mostrarAlerta(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración de 3 segundos
      color: 'danger', // Fondo rojo
      position: 'bottom', // Mostrar en la parte superior
    });
    await toast.present();
  }
 
  ngOnInit() {
    if (!this.nombreUsuario || this.nombreUsuario === 'Invitado') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        this.nombreUsuario = user.name || 'Invitado';
      } 
    }
  }

}
