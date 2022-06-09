import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  nomes: string[] = ["Rafale Cabral", "Eduardo Brock", "Lucas Oliveira", "Zé Ivaldo", "Matheus Bidu","Neto Moura", "William Oliveira","Leo Pais", "Jajá", "Edu", "Rafa Silva"];
  constructor() { }

  ngOnInit(): void {
  }

  add(nome: string): void{
    this.nomes.push(nome)
  }
}
