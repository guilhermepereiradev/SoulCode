package Aula2;

public class metodos {

    public static void main(String[] args) {
        impressao();
        mensagem("O Cruzeiro é gigante!");
        System.out.println("O dobro número é: "+dobro(6));
        System.out.println(fatorial(6));

        System.out.println("O resultado é "+ calc(2,3));
        System.out.println("O resultado é "+ calc(2.5,3.1));
        System.out.println("O resultado é "+ calc(2,3,4));

        double[] notas = {6.7, 7.8, 7.3, 8.5, 10};

        System.out.println("o resultado é "+ calc(notas));
        System.out.printf("%s%.2f%n","o resultado é ",calc(notas)); //resultado com duas casas decimais;
    }

    //metodos sem retorno e sem parâmetros;
    public static void impressao(){
        System.out.println("Java is beatiful!");
    }

    //metodo sem retorno mas com parametros
    public static void mensagem(String msg){
        System.out.println(msg);
    }

    //metodo com retorno
    public static int dobro(int num){
        return num*2;
    }

    public static int fatorial(int num){
        int fatorial = 1;
        for(int i = num; i > 0; i--){
            fatorial *= i;
        }
        return fatorial;
    }

    //sobrecarga de metodos
    public static int calc(int n1, int n2){
        return n1 + n2;
    }

    public static double calc(double n1, double n2){
        return  n1 + n2;
    }

    public static int calc(int n1, int n2, int n3){
        return n1+n2+n3;
    }

    public static double calc(double[] numeros){
        double soma = 0;
        for (double i:numeros) {
            soma += i;
        }

        return soma/numeros.length;
    }

}