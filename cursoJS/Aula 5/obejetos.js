// Propriedades/Atributos
// Métodos/Funções

let pessoa = {
    nome: 'Guilherme', //propriedade
    idade: 18,
    time: 'Cruzeiro',
    sexo: 'M',
    endereco: {
        rua: "Prof. Alberto Paes",
        numero: '643, Apto. 202',
        bairro: 'Jardim Arizona',
        cidade: 'Sete Lagoas',
        estado: 'MG',
    },
    cumprimentar: function(){
        console.log('Ola mundo!');
    }
}

console.log(`Olá meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, torço pro ${pessoa.time} e moro em ${pessoa.endereco.cidade}.`);
pessoa.cumprimentar();

console.table(pessoa); // tabela com os atributos de pessoa

console.log(pessoa['idade']); //evita erros, casso não ache o atributo = undefined 
pessoa['cumprimentar'](); // = pessoa.cumprimentar();