const qtdNotas = parseInt(prompt("Quantas notas devem ser recebidas?"));
let notas = [];
let soma = 0;
let media;

for(i = 0; i < qtdNotas; i++){
    notas.push(parseFloat(prompt(`Informe a ${i + 1}ª nota`)));
    soma += notas[i];
}

media = soma / notas.length;
media = media.toFixed(1);

if (media > 7){
    alert(`Sua média é ${media}, você foi aprovado!`);
} else if (media == 7){
    alert(`Sua média é ${media}, bateu na trave mas entrou. Aprovado!`);
} else {
    alert(`Sua média é ${media}, você foi reprovado!`);
}

console.log(notas);