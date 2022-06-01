"use strict";
let msg = 'Hello World'; //tipagem explicita
var idade = 18;
const ESTUDANDO = true;
const nomes = ['Rafael', 'Brock', 'Oliveira', 'Zé Ivaldo'];
const numeros = [1, 14, 18, 27];
const boleanos = [true, false, false, true];
const bidemensional = [['Alou', 'Testando'], ['Falando', 'Teste']];
const idades = [19, 25, 34, 27];
nomes.forEach((nome, i) => console.log(`${nome}, ${idades[i]} anos`));
const pessoa = {
    nome: 'Guilherme',
    idade: 18
};
