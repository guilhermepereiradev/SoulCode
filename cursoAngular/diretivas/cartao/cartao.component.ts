import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cartao', //criar uma tag chamada cartao <cartao></cartao>
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input()
  titulo: string = "";

  @Input()
  conteudo: string = "";

  constructor() { }

  ngOnInit(): void {
  }


}
