const qtdNome = parseInt(prompt("Qual a quantidade de nomes?"));
let nomes = ["  "];

for (i = 0; i < qtdNome; i++) {
    nomes.push(prompt(`Insira o ${i + 1}º nome`));
}

alert(nomes.reverse());