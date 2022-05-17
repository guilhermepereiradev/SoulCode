const qtdNotas = parseInt(prompt("Quantas notas devem ser recebidas?"));
let soma = 0;

for (i = 1; i <= qtdNotas; i++) {
    let nota = parseFloat(prompt(`Informe a ${i}ª nota :`));
    soma += nota;
}

const qtdFaltas = parseInt(prompt("Informe a quantidade de faltas:"));

let media = soma / qtdNotas;


if (media > 7 && qtdFaltas < 3) {
    alert(`Sua média é ${media.toFixed(1)}, você foi aprovado. Parabéns!`);
} else if (media == 7 || qtdFaltas == 3) {
    alert(`Sua média é ${media.toFixed(1)}, você foi aprovado. Quase não passou!`);
} else {
    alert(`Sua média é ${media.toFixed(1)}, você foi reprovado.`);
}