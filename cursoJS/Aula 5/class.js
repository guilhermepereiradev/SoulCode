class Pessoa {

    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}.`);
    }
    static cumprimentar2(){
        console.log(`Oi meu chapa.`);
    }
}

let p = new Pessoa('Guilherme', 18, '020.367.766-80');
let p2 = new Pessoa('João', 21, '123.456.789-10')
let p3 = new Pessoa('Amanda', 22, '123.456.789-10')

// p.cumprimentar();
// p2.cumprimentar();
// p3.cumprimentar();

// Pessoa.cumprimentar2();

const pessoas = [p, p2, p3];

for(let pessoa of pessoas){
    pessoa.cumprimentar();
}