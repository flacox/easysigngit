import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comentarios-modal',
  templateUrl: './comentarios-modal.component.html',
  styleUrls: ['./comentarios-modal.component.scss'],
})
export class ComentariosModalComponent implements OnInit {
  @Input() publicacionId: string = '';
  @Input() publicacion: any; // Recibe la publicación completa
  comentarios: any[] = [];
  nuevoComentario: string = '';
  usuarioLogueado: string = 'Invitado';

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private commentsService: CommentsService,
    private loadingController: LoadingController, 
  ) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.usuarioLogueado = user.name || 'Invitado';
    }

    this.commentsService.getComments(this.publicacionId).subscribe((comments) => {
      this.comentarios = comments;
    });
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async  agregarComentario() {
    if (this.nuevoComentario.trim()) {
      const loading = await this.loadingController.create({
        message: 'Enviando comentario...', // Mensaje del indicador de carga
        spinner: 'crescent', // Tipo de spinner
      });

      await loading.present(); // Mostrar el loading

      const comment = {
        contenido: this.nuevoComentario,
        nombreUsuario: this.usuarioLogueado,
        fecha: new Date(), // Fecha actual
      };
  
      this.commentsService.addComment(this.publicacion.id, comment).then(async() => {
        await loading.dismiss(); // Ocultar el loading
        this.nuevoComentario = ''; // Limpia el campo de texto
        this.mostrarAlerta('Comentario enviado exitosamente.', 'success'); // Mensaje de éxito
      })
      .catch((error) => {
        console.error('Error al agregar comentario:', error);
      });
    } else {
      this.mostrarAlerta('Por favor, completa todos los campos.', 'danger');
    }
  }
  async mostrarAlerta(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración de 3 segundos
      color: color, // Color personalizado
      position: 'bottom', // Mostrar en la parte inferior
    });
    await toast.present();
  }
  
}
