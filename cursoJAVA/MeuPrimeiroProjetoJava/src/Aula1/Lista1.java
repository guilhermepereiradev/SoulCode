package Aula1;

import java.util.Scanner;

public class Lista1 {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        System.out.println("Hello world!");

        //existem essas duas formas de declarar um vetor;
        int[] numeros = new int[5];
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        numeros[3] = 40;
        numeros[4] = 50;

        System.out.println("Na posicao 4 temos o elemento: " + numeros[4] + ".");
        System.out.println("No meu vetor exitem " + numeros.length + " itens.");

        for (int i = 0; i < numeros.length; i++) {
            System.out.println("O elemnto " + (i + 1) + " é " + numeros[i]);
        };

        int[] numeros2 = {10, 20, 30, 40, 50};

//        char[] gabarito = {'a', 'b', 'e', 'd', 'e'};
//        char[] respostas = new char[5];
//
//
//        int nota = 0;
//
//        for (int i = 0; i < gabarito.length; i++) {
//            System.out.println("Digite a resposta da questão " + (i + 1) + ".");
//            respostas[i] = leitor.next().charAt(0); //faz a leitura do primeiro caracter
//            if(gabarito[i] == respostas[i]){
//                nota++;
//            }
//        };
//
//        if(nota == 0){
//            System.out.println("Você não acertou nenhuma questão.");
//        } else if(nota == 1){
//            System.out.println("Você acertou uma questão.");
//        } else {
//            System.out.println("Você acertou "+nota+" questões.");
//        }

        String[] palavras = {"Cruzeiro", "Esporte", "Clube", "o Maior", "de Minas"};

            for(String elemento:palavras){
                System.out.println(elemento);
            };

        int[] meusNumeros = {1, 9, 2, 1};

            for (int num:meusNumeros) {
                System.out.println(num);
            }
    }
}
