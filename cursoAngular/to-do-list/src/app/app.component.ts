import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  itens: string[] = [];

  adicionar(e: string): void{
    this.itens.push(e);
    console.log("teste")
  }

  remover(item: any){
    this.itens.splice(this.itens.indexOf(item), 1);
  }
}
