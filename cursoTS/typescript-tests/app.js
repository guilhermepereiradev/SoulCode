"use strict";
let msg = 'Hello World'; //tipagem explicita
var idade = 18;
const ESTUDANDO = true;
const nomes = ['Rafael', 'Brock', 'Oliveira', 'Zé Ivaldo'];
const numeros = [1, 14, 18, 27];
const boleanos = [true, false, false, true, 50];
const bidemensional = [['Alou', 'Testando'], ['Falando', 'Teste']];
const idades = [19, 25, 34, 27];
nomes.forEach((nome, i) => console.log(`${nome}, ${idades[i]} anos`));
const p = {
    idade: 48,
    nome: 'Edu',
    cpf: '123.456.789-00'
};
const p2 = {
    idade: 27,
    nome: 'Jajá',
    cpf: 12345678910
};
const p3 = {
    idade: 25,
    nome: 'Rafael Santos',
    cpf: ['1', '2', '3', '4']
};
const p4 = {
    idade: 32,
    nome: 'Canesin',
    cpf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]
};
const p5 = {
    idade: 32,
    nome: 'Canesin',
    cpf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]
};
let x = 5; // pode receber qualquer valor mas é bom evitar
x = 'dasdasd';
