import { Component, OnInit } from '@angular/core';
import { ComunidadService } from '../../services/comunidad.service';

@Component({
  selector: 'app-gamificacion',
  templateUrl: './gamificacion.page.html',
  styleUrls: ['./gamificacion.page.scss'],
})
export class GamificacionPage implements OnInit {
  topPublicaciones: any[] = [];
  topComentarios: any[] = [];

  constructor(private comunidadService: ComunidadService) {}

  ngOnInit() {
    this.obtenerTopPublicaciones();
  }

  obtenerTopPublicaciones() {
    this.comunidadService.getPublicaciones().subscribe((data: any[]) => {
      const conteo = data.reduce((acc: any, publicacion) => {
        acc[publicacion.nombreUsuario] = (acc[publicacion.nombreUsuario] || 0) + 1;
        return acc;
      }, {});

      this.topPublicaciones = Object.entries(conteo)
        .map(([nombreUsuario, total]: any) => ({ nombreUsuario, total }))
        .sort((a: any, b: any) => b.total - a.total)
        .slice(0, 10);
    });
  }
  getMedalIcon(index: number): string {
    if (index === 0) return 'trophy'; // Icono para el primer lugar
    if (index === 1) return 'medal'; // Icono para el segundo lugar
    if (index === 2) return 'medal'; // Icono para el tercer lugar
    return 'ribbon'; // Icono genérico para los demás
  }
  
}

