const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes = ['Amanda', 'André', 'Andrew', 'Antonio', 'Barabara', 'Carolina', 'Claudia'];

for (let num of nums){
    console.log(num);
}

nums.forEach((i) => { // utilizado para não retornar nada
    console.log(i);
});

let novoArray = nums.map(x => x ** 2); // gera um novo array.
console.log(novoArray); // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]

let numerosPares = nums.filter(x => x % 2 == 0);
console.log(numerosPares); //[ 2, 4, 6, 8, 10 ]

// let numerosPares = nums.filter(function(x){
//     return x % 2 == 0;
// });

let numeroMaiorQueCinco = nums.find(x => x > 5); // retorna apenas o primeiro valor.
console.log(numeroMaiorQueCinco);//6

let indiceNumeroMaiorQueCinco = nums.findIndex(x => x > 5); // retorna o indice do valor encontrado.
console.log(indiceNumeroMaiorQueCinco);//5

let nomesComCaracteresAcimaDe6 = nomes.filter(nome => nome.length > 6);
console.log(nomesComCaracteresAcimaDe6);

let newArr = nomes.map(nome => nome.length);
console.log(newArr)