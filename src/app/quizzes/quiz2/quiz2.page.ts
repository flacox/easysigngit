import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})

export class Quiz2Page{

  questions = [
    {
      question: '¿Cuál es la seña que corresponde al verbo "tener"?',
      options: ['Llevar las manos al pecho con los dedos extendidos.', 'Formar un puño y llevarlo hacia el pecho.', 'Mover las manos hacia adelante en un gesto de ofrecimiento.', 'Colocar ambas manos sobre la cabeza.'],
      correctAnswer: 'Formar un puño y llevarlo hacia el pecho.',
    },
    {
      question: '¿Cómo se diferencia la seña de "gustar" de la de "encantar"?',
      options: ['"Gustar" utiliza una mano abierta y "encantar" ambas manos abiertas.', '"Gustar" se hace tocando el pecho, mientras que "encantar" incluye un movimiento hacia adelante.', 'Ambas usan movimientos hacia adelante, pero "encantar" tiene una expresión facial más intensa.', 'No hay diferencia entre ambas señas.'],
      correctAnswer: 'Ambas usan movimientos hacia adelante, pero "encantar" tiene una expresión facial más intensa.',
    },
    {
      question: '¿Qué gesto acompaña típicamente una pregunta cerrada en LSE?',
      options: ['Mover la cabeza hacia un lado.', 'Levantar las cejas y mover la cabeza ligeramente hacia adelante.', 'Abrir ambas manos hacia arriba.', 'Sacudir la cabeza de lado a lado.'],
      correctAnswer: 'Levantar las cejas y mover la cabeza ligeramente hacia adelante.',
    },
    {
      question: '¿Cuál es la seña que indica que algo sucederá en el futuro?',
      options: ['Señalar con el dedo índice hacia el pasado.', 'Mover la mano abierta hacia adelante desde el cuerpo.', 'Hacer un círculo con las manos hacia atrás.', 'Colocar las manos juntas en posición de oración.'],
      correctAnswer: 'Mover la mano abierta hacia adelante desde el cuerpo.',
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
    this.navController.navigateBack('/lesson2'); // Cambia '/home' por la ruta de tu menú principal
  }

}
