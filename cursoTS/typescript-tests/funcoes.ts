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

console.log(total);

const arr: number[] = [1, 2, 3, 4, 5, 6];

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

const names: string[] = ['Edu', 'Jajá', 'Luvannor'];

function map(array: any[], fn: (x: any) => any): any{
    let newNames: any[] = [];
    for (const i of array) {
        newNames.push(fn(i));
    }
    return newNames;
}

const newNames: any[] = map(names, (x) => x.length);
console.log(newNames);