// const numeroBinario = prompt("Digite seu número binário");
// let digitos = [];
// let numeroDecimal = 0;

// for (let i in numeroBinario){
//     digitos.push(numeroBinario[i]);
// }

// digitos = digitos.reverse();

// for (let i in digitos){
//     numeroDecimal += Math.pow(2, i) *  digitos[i];
// }

// alert(`O numero convertido é ${numeroDecimal}`);

const bin = prompt(`Qual o numero binário?`);

let dec = bin
.split('')
.reverse()
.map(x => parseInt(x))
.map((bin, i) => bin == 1 ? 2 ** i : 0)
.reduce((a, b) => a + b)

console.log(dec)