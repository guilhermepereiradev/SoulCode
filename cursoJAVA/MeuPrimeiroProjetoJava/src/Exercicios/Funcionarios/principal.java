package Exercicios.Funcionarios;

public class principal {
    public static void main(String[] args) {
        Funcionarios f1 = new Funcionarios("Alex", 44, "DEV Junior", "Ativo");
        Funcionarios f2 = new Funcionarios("Sorin", 46, "DEV Pleno", "Ativo");
        Funcionarios f3 = new Funcionarios("Fábio", 41, "DEV Senior", "Ativo");
        Funcionarios f4 = new Funcionarios("Goulart", 30, "DEV Junior", "Ativo");

        System.out.println(f1.getSituacao());
        f1.demitirFuncionario();
        System.out.println(f1.getSituacao());

        System.out.println("");
        System.out.println("####################");
        System.out.println("");

        System.out.println(f2.getCargo());
        f2.trocarCargoFuncionario();
        System.out.println(f2.getCargo());

        System.out.println("");
        System.out.println("####################");
        System.out.println("");

        System.out.println(f3.getIdade());
        f3.aniversariar();
        System.out.println(f3.getIdade());

        System.out.println("");
        System.out.println("####################");
        System.out.println("");

        f4.pagarSalario();
    }
}
