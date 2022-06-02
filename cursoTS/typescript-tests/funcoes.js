"use strict";
function mostrarMensagem() {
    console.log('Olá typescript');
}
mostrarMensagem();
function mostrarMensagem2(msg) {
    console.log(msg);
}
mostrarMensagem2('Olá, Peter.');
function mostrarMensagem3(msg) {
    console.log(msg);
}
// function somar(a: number, b: number): number{
//     return a + b;
// }
function somar(...nums) {
    return nums.reduce((x, y) => x + y);
}
let total = somar(1, 2, 3, 4, 5, 6);
console.log(total);
const arr = [1, 2, 3, 4, 5, 6];
// function forEach(array: any[], fn: (x: any) => void): void {
//     for (let i of array){
//         fn(i);
//     }
// }
// forEach(arr, (x) => console.log(x * 2));
// arr.forEach((x) => console.log(x*4));
// function map(array: any[], fn: (x: any) => any): any{
//     let novoArray: number[] = [];
//     for (let i of array) {
//             novoArray.push(fn(i));
//     }
//     return novoArray;
// }
// let novo = map(arr, (x) => (x**2));
// console.log(novo)
const names = ['Edu', 'Jajá', 'Luvannor'];
function map(array, fn) {
    let newNames = [];
    for (const i of array) {
        newNames.push(fn(i));
    }
    return newNames;
}
const newNames = map(names, (x) => x.length);
console.log(newNames);
