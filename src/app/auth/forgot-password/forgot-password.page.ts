import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])

  })

  utilsService = inject(UtilsService);
    firebaseService = inject(FirebaseService);

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {

      const loading = await this.utilsService.loading();

      await loading.present()

      this.firebaseService.sendRecoveryEmail(this.form.value.email)
        .then(resp => {
          this.utilsService.presentToast({
            message: 'Revisa tu correo para cambiar la contraseña:',
            duration: 2500,
            color: 'primary',
            position: 'bottom',
            icon: 'mail-outline'
          })

          this.utilsService.routerlink('/auth')
          this.form.reset()
          
        }).catch(error => {
          console.log(error);
          this.utilsService.presentToast({
            message: 'Error ocurrido:' + error.message,
            duration: 2500,
            color: 'danger',
            position: 'bottom',
            icon: 'alert-circle-outline'
          })
          //Acá se finaliza el spinner
        }).finally(() => {
          loading.dismiss();
        })
    }

  }

}
