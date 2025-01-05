import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage {
  username: string = '';
  title: string = '';
  content: string = '';
  imageUrl: string = '';

  constructor() { }

  submitPost() {
    // Lógica para manejar la publicación (enviar a Firebase o similar)
    console.log('Publicación enviada:', {
      username: this.username,
      title: this.title,
      content: this.content,
      imageUrl: this.imageUrl,
    });
  }

}
