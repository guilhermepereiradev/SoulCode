import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("antes do lançamento da exceção");
        System.out.println("Digite um numero: ");

        int numero = scan.nextInt(); // lança a exceção: InputMismatchException

        System.out.println("Você digitou o numero: "+numero);
        System.out.println("depois do lançamento da exceção");

        int[] numeros = {66, 3, 13, 14, 11};

        System.out.println("Digite um numero de 0 a 4: ");
        int pos = scan.nextInt(); // lança a exceção: ArrayIndexOutOfBoundsException

        System.out.println("O numero da posição "+pos+" é "+numeros[pos]);
    }
}
