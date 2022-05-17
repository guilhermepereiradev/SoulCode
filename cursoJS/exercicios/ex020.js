const qtdIdades = parseInt(prompt("Quantas pessoas são?"));
let idades = [];
let maiores = 0;
let menores = 0;
for (i = 0; i < qtdIdades; i++){
    idades.push(prompt(`Insira a ${i + 1}ª idade`));
    if (idades[i] >= 18){
        maiores++;
    } else {
        menores++;
    }
}

alert(`São ${maiores} maiores de idade e ${menores} menores de idade`);