import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-pre-test',
  templateUrl: './pre-test.page.html',
  styleUrls: ['./pre-test.page.scss'],
})
export class PreTestPage implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  constructor(private fb: FormBuilder) { }

  control!: FormControl;

  form = this.fb.group({
    interes: ['', Validators.required],
    aprender: ['', Validators.required],
    conocerApp: ['', Validators.required]
  });

  ngOnInit() { }

  async submit() {
    // Obtener el usuario desde el localStorage y parsearlo si es necesario
    const userJson = this.utilsService.getLocalStorage('user');
    let user: User | null = null;
  
    if (userJson) {
      try {
        // Parsear el JSON si es necesario
        user = JSON.parse(userJson) as User;
      } catch (error) {
        console.error('Error al parsear el usuario del localStorage', error);
      }
    }
  
    if (this.form.valid && user) {
      const loading = await this.utilsService.loading();
      await loading.present();
  
      const data = {
        interes: this.form.value.interes,
        aprender: this.form.value.aprender,
        conocerApp: this.form.value.conocerApp,
      };
  
      const path = `users/${user.uid}`;
      
      try {
        // Obtener el documento del usuario desde Firestore
        const userDoc = await this.firebaseService.getDocument(path);
  
        if (userDoc) {
          // Almacenar las respuestas en Firestore bajo el uid del usuario
          const respuestasRef = this.firebaseService.firestore.collection(`users/${user.uid}/respuestasFormularioInicial`);
          await respuestasRef.add(data);
          // Redirección al home
          this.utilsService.routerlink('/home');
          this.form.reset();
  
          // Mostrar un mensaje de bienvenida
          this.utilsService.presentToast({
            message: `Bienvenido ${user.name}`,
            duration: 1500,
            color: 'primary',
            position: 'bottom',
            icon: 'person-circle-outline'
          });
        } else {
          throw new Error('Usuario no encontrado');
        }
      } catch (error) {
        console.log(error);
        this.utilsService.presentToast({
          message: `Error ocurrido: ${error.message}`,
          duration: 2500,
          color: 'danger',
          position: 'bottom',
          icon: 'alert-circle-outline'
        });
      } finally {
        loading.dismiss();
      }
    }
  }
  
}
