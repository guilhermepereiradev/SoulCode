import java.util.ArrayList;

public class Matematica {
    public static void main(String[] args) {
        Retangulo r1 = new Retangulo("Retangulo", "Vermelho", 5,10);
        Circulo c1 = new Circulo("Circulo","Azul",4);
        Triangulo t1 = new Triangulo("Triangulo", "Amarelo", 5,10);

        ArrayList<Figura> figuras = new ArrayList<Figura>();
        figuras.add(r1);
        figuras.add(c1);
        figuras.add(t1);

        for (Figura f:figuras) {
            System.out.println("A figura "+f.getNome()+" da cor "+f.getCor()+" tem a area igual a "+f.CalcularArea()+"cm");
        }

    }
}
