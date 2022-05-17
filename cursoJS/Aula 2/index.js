const  numero = parseInt(prompt("Qual numero deve ser multiplicado"));

for(i = 0; i <= 1000; i++){
    let res = numero * i;
    document.write(`${numero} * ${i} = ${res}<br>`);
}