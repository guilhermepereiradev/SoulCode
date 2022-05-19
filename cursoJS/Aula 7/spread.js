let p = {
    nome: 'Amanda',
    idade: 25
}

let p2 = {
    ...p
}

let arr = [1, 2, 3];
let arr1 = [4, 5, 6]
let arr2 = [...arr];
let arr3 = [...arr , ...arr1];

arr3[1] = 0;

console.log(arr);
console.log(arr2);
console.log(arr3)

function somar(...numero){
    let somaTotal = 0

    for(let numero of numeros){
        somaTotal += numero;
    }
    return somaTotal
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
