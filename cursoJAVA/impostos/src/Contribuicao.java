import java.util.ArrayList;
import java.util.List;

public class Contribuicao {
    public static void main(String[] args) {
        PessoaFisica pf1 = new PessoaFisica("Robson", 100000, 500);
        PessoaFisica pf2 = new PessoaFisica("Guilherme", 18000, 0);

        PessoaJuridica pj1 = new PessoaJuridica("Casimiro Enterprise", 1000000, 5);
        PessoaJuridica pj2 = new PessoaJuridica("Gaules Enterprise", 1000000, 11);

        List<Pessoa> listaPessoas = new ArrayList<Pessoa>();

        listaPessoas.add(pf1);
        listaPessoas.add(pf2);
        listaPessoas.add(pj1);
        listaPessoas.add(pj2);

        double soma = 0;

        for (Pessoa p:listaPessoas) {
            System.out.printf("%s%s%.2f%n",p.getNome()," deve pagar de imposto R$",p.calcularImposto());
            soma += p.calcularImposto();
        }

        System.out.printf("%s%.2f%n","O total de imposto a ser pago é de: R$",soma);
    }
}
