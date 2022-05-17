const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];


for (const i in vetorAdiciona) {
    vetorPilha.push(vetorAdiciona[i]);
}

console.log(vetorPilha);