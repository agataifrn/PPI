import { Component, signal } from '@angular/core';
import { AppCalculaMedia } from "./app-calcula-media/app-calcula-media";

@Component({
  selector: 'app-root',
  imports: [AppCalculaMedia, AppCalculaMedia],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('media');
}
