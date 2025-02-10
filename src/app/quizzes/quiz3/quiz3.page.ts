import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.page.html',
  styleUrls: ['./quiz3.page.scss'],
})

export class Quiz3Page {

  questions = [
    {
      question: '¿Cómo se representa el número 7 en lengua de señas?',
      options: ['Extendiendo todos los dedos de la mano', 'Haciendo un círculo con el dedo índice y el pulgar', 'Tocando el dedo índice con el pulgar', 'Haciendo una V con la mano derecha y mostrando la palma de la mano izquierda al mismo tiempo'],
      correctAnswer: 'Haciendo una V con la mano derecha y mostrando la palma de la mano izquierda al mismo tiempo',
    },
    {
      question: '¿Cuál es la señal para representar el número 20 en lengua de señas?',
      options: ['Extendiendo dos dedos de la mano', 'Haciendo un puño cerrado', 'Formando una V con los dedos índice y medio, y luego formando un círculo con el pulgar y el índice', 'Tocando la palma de la otra mano con el dedo índice'],
      correctAnswer: 'Formando una V con los dedos índice y medio, y luego formando un círculo con el pulgar y el índice',
    },
    {
      question: '¿Cuál es la señal para representar el número 100 en lengua de señas?',
      options: ['Tocando la yema del dedo índice con el dedo pulgar', 'Golpeando la palma de la mano con el puño cerrado', 'Deslizando el dedo índice en diagonal', 'Colocando la mano en forma de "C" sobre el pecho'],
      correctAnswer: 'Deslizando el dedo índice en diagonal',
    },
  ];

  currentQuestionIndex = 0; // Índice de la pregunta actual
  selectedOption: string | null = null; // Respuesta seleccionada
  correctCount = 0; // Contador de respuestas correctas
  correctSound = new Audio('assets/sounds/correct.mp3');
  incorrectSound = new Audio('assets/sounds/incorrect.mp3');

  constructor(private alertController: AlertController, private navController: NavController) { }

  irAPantalla(ruta: string) {
    this.navController.navigateRoot(ruta); // Cierra la pantalla actual y abre la nueva
  }

  async submitAnswer() {
    if (!this.selectedOption) {
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Por favor selecciona una respuesta antes de continuar.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const currentQuestion = this.questions[this.currentQuestionIndex];
    const isCorrect = this.selectedOption === currentQuestion.correctAnswer;

    // Reproducir sonido
    if (isCorrect) {
      this.correctSound.play();
      this.correctCount++; // Incrementar el contador si es correcta
    } else {
      this.incorrectSound.play();
    }

    const message = isCorrect
      ? '¡Respuesta correcta! 😊'
      : `Respuesta incorrecta. La respuesta correcta era: ${currentQuestion.correctAnswer}.`;

    // Mostrar resultado
    const alert = await this.alertController.create({
      header: 'Resultado',
      message,
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.goToNextQuestion();
          },
        },
      ],
    });
    await alert.present();
  }

  goToNextQuestion() {
    this.selectedOption = null;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showCompletionAlert();
    }
  }

  async showCompletionAlert() {
    const alert = await this.alertController.create({
      header: 'Test completado',
      message: `¡Has completado el test! 🎉\n\nTu puntuación: ${this.correctCount}/${this.questions.length}`,
      buttons: [
        {
          text: 'Reintentar',
          handler: () => {
            this.resetTest();
          },
        },
        {
          text: 'Finalizar',
          handler: () => {
            this.exitTest();
          },
        },
      ],
    });
    await alert.present();
  }

  resetTest() {
    this.currentQuestionIndex = 0; // Reiniciar índice de preguntas
    this.correctCount = 0; // Reiniciar contador de respuestas correctas
    this.selectedOption = null; // Reiniciar opción seleccionada
  }

  exitTest() {
    this.navController.navigateBack('/lesson3'); // Cambia '/home' por la ruta de tu menú principal
  }

}
