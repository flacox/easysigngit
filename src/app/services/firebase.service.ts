import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc, collection } from '@angular/fire/firestore'
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';
import { Guest } from '../models/guest.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsService = inject(UtilsService);

  //Trae los datos de la sección de autenticación de la base de datos
  getAuth() {
    return getAuth();
  }

  // Trae el contenido para iniciar sesión
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

    // Generar un ID único para el invitado
  generateId(): string{
    return this.firestore.createId();
  }

  // Registrar un invitado en la base de datos
  async registerGuest(){
    const guestId = this.generateId();
    const guest: Guest = {
      uid: guestId,
    };
    //Guardar el invitado en la colección
    const path = `guests/${guestId}`;
    await setDoc(doc(getFirestore(), path), guest);

    return guest;
  }

  

  // Trae el contenido para registrarse
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: any) {
    const auth = this.getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, { displayName });
    }else {
      console.error('No hay un usuario autenticado');
      return Promise.reject(new Error('No hay un usuario autenticado'));
    }

  }

  setDocument(path: any, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: any){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  // Función cerrar sesión
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('guest');
    this.utilsService.routerlink('/auth');
  }
  
}
