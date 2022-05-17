// const array = new Array()
const arrayBidimensional = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12 , [13, 14, 15], 16]
]

console.log(arrayBidimensional[3][1][1]); //14


const array = [1, 2, 3, 4, 5, 10, 75.6, 100, 80];

console.log(array.length); //9


let exemplos = [1, 2, 3, 4, 5]
let soma = 0;

for (let indice of exemplos) {
    soma += indice;
}
console.log(soma); //15

let exemplos2 = ['HTML', 'CSS', 'JavaScript'];

for (let i in exemplos2){
    console.log(i); //0, 1, 2
}

for (let i of exemplos2){
    console.log(i); //HTML, CSS, JavaScript
}

const array1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

console.log(array1[array1.length - 1][array1[array1.length -1].length -1]); //12