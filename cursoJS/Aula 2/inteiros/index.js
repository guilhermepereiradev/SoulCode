const n1 = parseInt(prompt("Insira o primeiro numero inteiro:"));
const n2 = parseInt(prompt("Insira o segundo numero inteiro:"));
const n3 = parseInt(prompt("Insira o terceiro numero inteiro"));

if(n1 > n2 && n1 > n3){
    alert(`O maio numero inteiro é o primeiro, ${n1}.`);
} else if(n2 > n1 && n2 > n3){
    alert(`O maior numero inteiro é o segundo, ${n2}.`);
} else {
    alert(`O maior numero inteiro é o terceiro, ${n3}.`)
}