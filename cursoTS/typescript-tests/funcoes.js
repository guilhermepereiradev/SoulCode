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
let resultado = mostrarMensagem3('teste');
console.log(total);