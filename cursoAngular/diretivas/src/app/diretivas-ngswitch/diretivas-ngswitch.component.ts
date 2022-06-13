import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngswitch',
  templateUrl: './diretivas-ngswitch.component.html',
  styleUrls: ['./diretivas-ngswitch.component.css']
})
export class DiretivasNgswitchComponent implements OnInit {

  cor: string = 'preto';

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor(novaCor: string): void{
    this.cor = novaCor;
  }
}
