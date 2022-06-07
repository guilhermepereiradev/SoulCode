package exercicio2;

import java.sql.SQLOutput;
import java.util.Scanner;

public class principal {
    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        Funcionarios f1 = new Funcionarios("Alex", 44, "DEV Junior", "Ativo");
        Funcionarios f2 = new Funcionarios("Sorin", 46, "DEV Pleno", "Ativo");
        Funcionarios f3 = new Funcionarios("Fábio", 41, "DEV Senior", "Ativo");
        Funcionarios f4 = new Funcionarios("Goulart", 30, "DEV Junior", "Ativo");

        System.out.println("1 - " + f1.getNome());
        System.out.println("2 - " + f2.getNome());
        System.out.println("3 - " + f3.getNome());
        System.out.println("4 - " + f4.getNome());
        System.out.println("Selecione um funcionário:");


        int op = leitor.nextInt();
        char sn;
        float sal;



        if(op ==1 ) {
            System.out.println("Você escolheu o funcionário " + f1.getNome());
            mostrarOpcoes();
            op = leitor.nextInt();

            if (op == 1) {
                f1.aniversariar();
            } else if (op == 2) {
                f1.trocarCargoFuncionario();
            } else if (op == 3) {
                System.out.println("Informe o salario do funcionario");
                sal = leitor.nextFloat();
                f1.pagarSalario();
            } else if (op == 4) {
                System.out.println("Tem certeza que deseja demitir o " + f1.getCargo() + " Alex? (S/N)");
                sn = leitor.next().charAt(0);
                if (sn == 's' || sn == 'S') {
                    f1.demitirFuncionario();
                } else {
                    System.out.println("Operação cancelada.");
                }
            }
            } else if (op == 2) {
                System.out.println("Você escolheu o funcionário " + f2.getNome());
                mostrarOpcoes();
                op = leitor.nextInt();
                if (op == 1) {
                    f2.aniversariar();
                } else if (op == 2) {
                    f2.trocarCargoFuncionario();
                } else if (op == 3) {
                    System.out.println("Informe o salario do funcionario");
                    sal = leitor.nextFloat();
                    f2.pagarSalario();
                } else if (op == 4) {
                    System.out.println("Tem certeza que deseja demitir o " + f2.getCargo() + " " + f2.getNome() + " (S/N)");
                    sn = leitor.next().charAt(0);
                    if (sn == 's' || sn == 'S') {
                        f2.demitirFuncionario();
                    } else {
                        System.out.println("Operação cancelada.");
                    }
                } else {
                    System.out.println("Opção inválida.");
                }
            } else if (op == 3) {
                System.out.println("Você escolheu o funcionário " + f3.getNome());
                mostrarOpcoes();
                op = leitor.nextInt();
                if (op == 1) {
                    f3.aniversariar();
                } else if (op == 2) {
                    f3.trocarCargoFuncionario();
                } else if (op == 3) {
                    System.out.println("Informe o salario do funcionario");
                    sal = leitor.nextFloat();
                    f3.pagarSalario();
                } else if (op == 4) {
                    System.out.println("Tem certeza que deseja demitir o " + f3.getCargo() + " " + f3.getNome() + " (S/N)");
                    sn = leitor.next().charAt(0);
                    if (sn == 's' || sn == 'S') {
                        f3.demitirFuncionario();
                    } else {
                        System.out.println("Operação cancelada.");
                    }
                } else {
                    System.out.println("Opção inválida.");
                }
            } else if (op == 4) {
                System.out.println("Você escolheu o funcionário " + f4.getNome());
                mostrarOpcoes();
                op = leitor.nextInt();
                if (op == 1) {
                    f4.aniversariar();
                } else if (op == 2) {
                    f4.trocarCargoFuncionario();
                } else if (op == 3) {
                    System.out.println("Informe o salario do funcionario");
                    sal = leitor.nextFloat();
                    f4.pagarSalario();
                } else if (op == 4) {
                    System.out.println("Tem certeza que deseja demitir o " + f4.getCargo() + " " + f4.getNome() + " (S/N)");
                    sn = leitor.next().charAt(0);
                    if (sn == 's' || sn == 'S') {
                        f4.demitirFuncionario();
                    } else {
                        System.out.println("Operação cancelada.");
                    }
                } else {
                    System.out.println("Opção inválida.");
                }
            } else {
                System.out.println("Operação inválida.");
            }

    }
    public static void mostrarOpcoes(){
        System.out.println("1 - 'Aniversariar'.");
        System.out.println("2 - Promover.");
        System.out.println("3 - Pagar sálario.");
        System.out.println("4 - Demitir.");
    }

}