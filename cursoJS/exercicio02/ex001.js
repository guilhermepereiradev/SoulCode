const qtdNumeros = parseFloat(prompt("Quantos números deseja adicionar?"));
let numeros = [];
let soma = 0;
let media= 0;
let potencias = [];
let raizes = [];

for(i = 0; i < qtdNumeros; i++){
    numeros.push(parseFloat(prompt(`Insira o ${i + 1}º número:`)));
    soma += numeros[i];
    media = (soma / numeros.length).toFixed(2);
    potencias.push(Math.pow(numeros[i], 2));
    raizes.push(Math.sqrt(numeros[i]).toFixed(2), Math.pow(numeros[i], (1/3)).toFixed(2));
}
console.log(`Numeros escolhidos: ${numeros}`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${media}`)
console.log(`Quadrados: ${potencias}`)
console.log(`Raizes: ${raizes}`)