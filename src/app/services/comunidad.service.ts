import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private collectionName = 'publicaciones';
  private comentariosCollection = 'comentarios';

  constructor(private firestore: AngularFirestore) { }

   // Obtener todas las publicaciones
   getPublicaciones(): Observable<any[]> {
    return this.firestore
      .collection(this.collectionName, (ref) => ref.orderBy('fecha', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  // Agregar nueva publicación
  addPublicacion(publicacion: { nombreUsuario: string; titulo: string; contenido: string; fecha: Date }) {
    return this.firestore.collection(this.collectionName).add(publicacion);
  }
  // comentarios.
  getComentariosCount(publicacionId: string): Promise<number> {
    return this.firestore
      .collection('comentarios', ref => ref.where('publicacionId', '==', publicacionId))
      .get()
      .toPromise()
      .then(snapshot => snapshot.size);
  }

  // Filtrar las publicaciones por criterio
getPublicacionesConFiltro(filtro: string, usuario?: string): Observable<any[]> {
  let ref = this.firestore.collection(this.collectionName, ref => {
    switch(filtro) {
      case 'recientes':
        return ref.orderBy('fecha', 'desc');
      case 'antiguas':
        return ref.orderBy('fecha', 'asc');
      case 'usuario':
        return ref.where('nombreUsuario', '==', usuario).orderBy('fecha', 'desc');
      default:
        return ref.orderBy('fecha', 'desc'); // Por defecto, más recientes
    }
  }).valueChanges({ idField: 'id' });

  return ref;
}

}
