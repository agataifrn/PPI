import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly nomeTurma = 'INFOM 2023.1';

  protected readonly disciplinas: any[] = [];

  constructor() {
    this.disciplinas = [
      {
        nome: 'PPI',
        professor: 'Bruno',
      cargaHoraria: 60
    },
    {
      nome: 'Espanhol',
      professor: 'Erika',
      cargaHoraria: 120
    },
    {
      nome: 'Português',
      professor: 'Regina',
      cargaHoraria: 200
    },
    {
      nome: 'Biologia',
      professor: 'Andréa',
      cargaHoraria: 100
    }
    ];
  }
}
