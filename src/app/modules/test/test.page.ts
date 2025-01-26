import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
  selectedOption: string | null = null; // Almacena la opción seleccionada
  correctAnswer: string = 'B'; //Aqui se define la respuesta correcta

  constructor(private alertController: AlertController) { }

  async submitAnswer(){
    if(!this.selectedOption) {
      //Mostrar alerta si no selecciono ninguna opcion
      const alert = await this.alertController.create({
        header: 'Atencion',
        message: 'Por favor, selecciona una de las opciones para continuar',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const message = 
      this.selectedOption === this.correctAnswer
        ? '!Respuesta Correcta 😊'
        : '!Respuesta incorrecta, intentalo de nuevo 😢';

    //mostrar resultado
    const alert = await this.alertController.create({
      header: 'Resultado',
      message,
      buttons: ['OK']
    });
    await alert.present();

    //reiniciar la seleccion
    this.selectedOption = null;

  }

}
