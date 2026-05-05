import { Component, signal } from '@angular/core';
import { ExibeMensagem } from "./exibe-mensagem/exibe-mensagem";

@Component({
  selector: 'app-root',
  imports: [ExibeMensagem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeiro-app');
}
