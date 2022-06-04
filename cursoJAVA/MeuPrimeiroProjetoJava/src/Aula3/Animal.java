package Aula3;

public class Animal {
    private String nome;
    private String especie;
    private int idade;

    public Animal(String nome, String especie, int idade){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    public void vacinar(){
        System.out.println("O animal "+ getNome() +" foi vacinado!");
    }
    public String getNome() { //faz a leitura do valor de nome
        return nome;
    }

    public void setNome(String nome) { //modifica o valor do atributo
        this.nome = nome;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if(idade < 0){
            System.out.println("Idade inválida!");
        } else {
            this.idade = idade;
        }
    }
}
