import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-app';
  estiloDoCartao: string = "display: block";
  
  @ViewChild("para")
  pOlaMundo!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit(){
    setTimeout(() => {
      this.pOlaMundo.nativeElement.innerText = "Cruzeiro Esporte Clube"
    }, 6000)
  }

  deletar(evento: any): void{
    console.log(evento);
    this.estiloDoCartao = "display: none";
  }

}
