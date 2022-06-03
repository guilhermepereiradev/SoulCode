"use strict";
class Pessoa {
    // private nome: string; //modificador de acesso
    // private email: string;
    // private senha: string | number;
    // public constructor(nome: string, email: string, senha: string | number){
    //     this.nome = nome;
    //     this.email = email;
    //     this.senha = senha;
    // }
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    cumprimentar(num) {
        console.log(`Olá meu nome é ${this.nome} e tenho ${num} anos`);
    }
    cumprimentarComRetorno() {
        return `Olá meu nome é ${this.nome}.`;
    }
}
let p = new Pessoa('Fulano', 'fulano@email', 12345);
// p.cumprimentar(18);
// console.log(p.cumprimentarComRetorno());
const p1 = 'Fulano';
