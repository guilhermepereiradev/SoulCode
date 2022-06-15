import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Café SoulCode';
  subtitle: string = 'Café';
  preco: number = 10;

  pessoa = {
    nome: "Guilherme",
    idade: 18,
    empregoAtual: "Desempregado",
    estadoCivil: "Solteiro"
  }

  produtos = [
    {
    nome: "Playstation 5",
    descricao: "Videogame muito caro",
    preco: 4899,
    proprietarioDoPost: "Vitor",
    foto: "https://img.olx.com.br/images/39/394232647352205.jpg",
    dataDeCriacao: new Date()
    },
    {
    nome: "Xbox Series X",
    descricao: "Videogame muito caro",
    preco: 4500,
    proprietarioDoPost: "Manuela",
    foto: "https://img.olx.com.br/images/44/447296179405942.jpg",
    dataDeCriacao: new Date()
    },
    {
    nome: "Xbox Series S",
    descricao: "Videogame um pouco caro",
    preco: 2149,
    proprietarioDoPost: "Marlon",
    foto: "https://img.olx.com.br/thumbs256x256/32/322217168090412.jpg",
    dataDeCriacao: new Date()
    }
];

  data: Date = new Date();
}
