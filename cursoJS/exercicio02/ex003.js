const numeroBinario = prompt("Digite seu número binário"); '11010'
let digitos = [];
let numeroDecimal = 0;

for (let i in numeroBinario){
    digitos.push(numeroBinario[i]);
}

digitos = digitos.reverse();

for (let i in digitos){
    numeroDecimal += Math.pow(2, i) *  digitos[i];
}

alert(`O numero convertido é ${numeroDecimal}`)