let msg: string = 'Hello World'; //tipagem explicita
var idade: number = 18;
const ESTUDANDO: boolean = true; 

const nomes: Array<string> = ['Rafael', 'Brock', 'Oliveira', 'Zé Ivaldo'];
const numeros: Array<number> = [1, 14, 18, 27];
const boleanos: Array<boolean | number> = [true, false, false, true, 50];
const bidemensional: Array<Array<string>> = [['Alou', 'Testando'], ['Falando', 'Teste']];

const idades: number[] = [19, 25, 34, 27];

nomes.forEach((nome, i) => console.log(`${nome}, ${idades[i]} anos`));

interface Pessoa {
    idade: number,
    nome: string,
    cpf: number | string | string[] | number[]
}

const p: Pessoa = {
    idade: 48,
    nome: 'Edu',
    cpf: '123.456.789-00'
}

const p2: Pessoa = {
    idade: 27,
    nome: 'Jajá',
    cpf: 12345678910
}

const p3: Pessoa = {
    idade: 25,
    nome: 'Rafael Santos',
    cpf: ['1', '2', '3', '4']
}

const p4: Pessoa = {
    idade: 32,
    nome: 'Canesin',
    cpf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]
}

const p5: Pessoa = {
    idade: 32,
    nome: 'Canesin',
    cpf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]
}

let x: any = 5; // pode receber qualquer valor mas é bom evitar

x = 'dasdasd';

