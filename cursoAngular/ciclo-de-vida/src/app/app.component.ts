import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo-de-vida';
  saldo: number = 1000;
  mostrarComponente: boolean = true;

  alterarValor(valor: number):void {
    this.saldo += valor;
  }

  toggleMostrarComponente(): void {
    this.mostrarComponente = !this.mostrarComponente;
  }
}
