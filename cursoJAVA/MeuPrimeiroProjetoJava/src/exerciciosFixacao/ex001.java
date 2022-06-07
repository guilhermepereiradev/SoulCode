package exerciciosFixacao;

import java.util.Scanner;

public class ex001 {
    public static void main(String[] args) {

        Scanner leitor = new Scanner (System.in);
//        for (int i = 150; i <= 300; i++) {
////            System.out.println(i);
////        }
//
//        for (int i = 0; i <= 1000; i++) {
//            System.out.println(cont += i);
//        }
//        for (int i = 1; cont < 99; i++) {
//            System.out.println(cont = i * 3);
//        }


//            fatoriarDeAteUm(10);

//        for (int i = 0; i < nums.length; i++) {
//            System.out.println(fatorial(nums[i]));
//        }
//        System.out.println("Escolha um numero");
//        int x = leitor.nextInt();
//
//        if(x%2 == 0){
//            x /= 2;
//        } else {
//            x = 3*x+1;
//        }
//
//        System.out.println("Agora o numero é: "+x);

        System.out.println("Insira o valor de x1: ");
        int x1 = leitor.nextInt();
        System.out.println("Insira o valor de y1");
        int y1 = leitor.nextInt();
        System.out.println("Insira o valor de x2: ");
        int x2 = leitor.nextInt();
        System.out.println("Insira o valor de y2");
        int y2 = leitor.nextInt();

        double res = Math.pow(((Math.pow((x2-x1), 2))+(Math.pow((y2-y1), 2))), (1/2));

        System.out.println("Distancia euclidiana = "+res);
   }

//   public static int fatorial(int num){
//       int cont = 1;
//        for (int i = num; i > 0; --i) {
//           cont *= i;
//       }
//        return cont;
//   }
//
//   public static void fatoriarDeAteUm(int num){
//        int cont = 1;
//        for (int i = 1; i <= num; i++) {
//           System.out.println(fatorial(i));
//       }
}
