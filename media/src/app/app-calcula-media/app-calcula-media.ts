import { Component } from '@angular/core';

@Component({
  selector: 'app-app-calcula-media',
  imports: [],
  templateUrl: './app-calcula-media.html',
  styleUrl: './app-calcula-media.scss',
})
export class AppCalculaMedia {
  protected mediaParcial: number | undefined;

  constructor() {
    this.mediaParcial = undefined;
  }

  calcularMediaParcial(b1: number, b2: number, 
                       b3: number, b4: number) {
    this.mediaParcial = (b1 + b2 + b3 + b4) / 4;
    return this.mediaParcial;
  }

}
