function mostrarMensagem(){
    console.log('Olá typescript');
}

mostrarMensagem();

function mostrarMensagem2(msg: string) {
    console.log(msg);
}

mostrarMensagem2('Olá, Peter.');

function mostrarMensagem3(msg: string): void{
    console.log(msg);
}

// function somar(a: number, b: number): number{
//     return a + b;
// }

function somar(...nums: number[]): number {
    return nums.reduce((x, y) => x + y);
}

let total = somar(1, 2, 3, 4, 5, 6);
let resultado = mostrarMensagem3('teste');

console.log(total)