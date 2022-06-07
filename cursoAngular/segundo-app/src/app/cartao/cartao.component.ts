import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cartao', //criar uma tag chamada cartao <cartao></cartao>
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input()
  tituloCartao: string = "Texto inicial";

  @Input()
  textoCartao: string = "Valor Inicial";

  @Input()
  corDaBorda: string = "red";

  @Input()
  imagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  gerarCssDoCartao(): string{
    return `border-color: ${this.corDaBorda}`;
  }


}
