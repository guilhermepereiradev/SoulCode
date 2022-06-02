public class AloMundo{
    public static void main(String[] args){
        System.out.println("Bem vindos ao mundo Java");

        int idade;
        idade = 15;
        System.out.println("a idade é: " + idade); //quebra uma linha
        System.out.printf("%s","Exemplo de print com printf"); // para quebrar linha adiciona %n

        //operadores aritméticos
        // soma -> +
        // subtração -> -
        // multiplicação -> *
        // divisão -> /
        // resto da divisão -> %

        int num1 = 5;
        int num2 = 2;
        int resto = 5%2;

        int x = 10;
        long y = 10;

        x = (int) y; // passa de long para int

        char letra = 'k';

        float numero = 3;

        System.out.printf("%n%.2f%n",numero); // %d = digito / %f = float; / %.2 = duas casa decimais 

        // %d	representa números inteiros
        // %f	representa números floats
        // %2f	representa números doubles
        // %b	representa valores booleanos
        // %c	representa valores char

        // ATRIBUIÇÕES DE VALORES

        int a = 1;
        int b = 2;
        
        a += b; // 3 

        a *= b; // 6

        a =+ b; // 2

        a++; // 2

        int i = 5;

        int z;

        z = i++;

        System.out.printf("%n%d%n",z);
        System.out.printf("%n%d%n",i);


        // int meuNumero; //primitiva
        // Integer s; //por referencia

        // double => Double
        
        // float => Float

        String palavra = "Cruzeiro";

        System.out.printf("%n%s%n", palavra);
    }
}