let msg: string = 'Hello World'; //tipagem explicita
var idade: number = 18;
const ESTUDANDO: boolean = true; 

const nomes: Array<string> = ['Rafael', 'Brock', 'Oliveira', 'Zé Ivaldo'];
const numeros: Array<number> = [1, 14, 18, 27];
const boleanos: Array<boolean> = [true, false, false, true];
const bidemensional: Array<Array<string>> = [['Alou', 'Testando'], ['Falando', 'Teste']];

const idades: number[] = [19, 25, 34, 27];

nomes.forEach((nome, i) => console.log(`${nome}, ${idades[i]} anos`));

const pessoa = {
    nome: 'Guilherme',
    idade: 18
}

