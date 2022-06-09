import java.util.ArrayList;

public class Matematica {
    public static void main(String[] args) {
        Retangulo r1 = new Retangulo("Retangulo", "Vermelho", 5,10);
        Circulo c1 = new Circulo("Circulo","Azul",4);
        Triangulo t1 = new Triangulo("Triangulo", "Amarelo", 5,10);

//        ArrayList<Figura> figuras = new ArrayList<>();
//        figuras.add(r1);
//        figuras.add(c1);
//        figuras.add(t1);
//
//        System.out.println(figuras.get(0).getNome());

        Figura figuras[] = new Figura[3];

        figuras[0] = r1;
        figuras[1] = c1;
        figuras[2] = t1;

        for (int i = 0; i < figuras.length; i++) {
            System.out.println("A figura "+figuras[i].getNome()+" da cor "+figuras[i].getCor()+" tem a area igual a "+figuras[i].CalcularArea()+"cm");
        }

    }
}
