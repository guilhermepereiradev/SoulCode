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

let existeAlgumNomeCom8Caracteres = nomes.some(nome => nome.length == 8); // retorna true com apenas 1 elemento satisfazendo a condição
let todosOsNomesPossuem8Carecteres = nomes.every(nome => nome.length == 8); // todos precisam satisfazer a condição para retornar true

let novo = nums.concat([20, 30, 40]);

nums.join(' - '); // transforma em string com - entre os valores

nums.includes(x); // retornar verdadeiro se tiver o elemento x

nums.pop() //remove o ultimo elemento

nums.shift() // remove o primeiro elemento

nums.unshift() // adiciona elemento no inicio do array

nums.push() // adiciona elemento no final do array

nums.reverse() // inverte a ordem de um array

nums.indexOf(x) // retorna o elemento do index x

nums.slice(2,5); // retorna os elementos 2,3,4
nums.slice(-5); // retornar os últimos 5 elementos

nums.slice(2,5); // retorna os elementos 2,3,4
console.log(nums.splice(3, 5)); // recorta um array que começa no index 1 e contem 5 elementos

nums.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;           //reduz a o array em um valor, nesse caso sera retornado a soma dos calores do array
});