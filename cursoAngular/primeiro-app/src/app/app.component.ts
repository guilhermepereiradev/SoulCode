import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  contador: number = 0;
  simbolos: string [] = ['+', '-']

  incrementar():void {
    this.contador++
  }

  decrementar(): void{
     this.contador--
  }

  adicionarValor(evento: any): void {
    console.log(evento.target);
    // this.contador += evento.data; //mostra apenas um valor
    
    if(evento.target.value == 0){
      this.contador = 0;
    } else {
      this.contador = parseInt(evento.target.value); //concatena os numeros
    }
    
  }
}