import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.page.html',
  styleUrls: ['./quiz1.page.scss'],
})
export class Quiz1Page {

  questions = [
    {
      question: '¿Cuál es el color que se representa moviendo tocando el mentón con el dedo índice?',
      options: ['Rojo', 'Amarillo', 'Verde', 'Azul'],
      correctAnswer: 'Rojo',
    },
    {
      question: '¿Cuál de las siguientes señas representa el día miércoles?',
      options: ['Toque en la frente con dos dedos', 'Haga un movimiento circular con el dedo índice en la palma de la otra mano', 'Sacudir las manos hacia el frente', 'Toca la palma de la mano izquierda con el dorso de la mano derecha'],
      correctAnswer: 'Toque en la frente con dos dedos',
    },
    {
      question: '¿Cuál de los siguientes meses es representado utilizando la inicial de la mano en forma de "L" en la cara?',
      options: ['Enero', 'Febrero', 'Julio', 'Septiembre'],
      correctAnswer: 'Julio',
    },
    {
      question: '¿Cuál de las siguientes representaciones es la forma correcta de expresar la palabra "perdón"?',
      options: ['Deslizar la palma de la mano derecha sobre la mano izquierda', 'Golpear el puño cerrado contra la palma de la otra mano', 'Hacer un gesto de disculpa inclinando la cabeza hacia adelante', 'Hacer un movimiento circular con la mano abierta sobre el pecho'],
      correctAnswer: 'Deslizar la palma de la mano derecha sobre la mano izquierda',
    },
  ];

  currentQuestionIndex = 0; // Índice de la pregunta actual
  selectedOption: string | null = null; // Respuesta seleccionada
  correctCount = 0; // Contador de respuestas correctas
  correctSound = new Audio('assets/sounds/correct.mp3');
  incorrectSound = new Audio('assets/sounds/incorrect.mp3');

  constructor(private alertController: AlertController, private navController: NavController) { }

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
    this.navController.navigateBack('/lesson1'); // Cambia '/home' por la ruta de tu menú principal
  }
}
