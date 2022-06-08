public class Contribuicao {
    public static void main(String[] args) {
        PessoaFisica pf1 = new PessoaFisica("Robson", 100000, 500);
        PessoaFisica pf2 = new PessoaFisica("Guilherme", 18000, 0);

        PessoaJuridica pj1 = new PessoaJuridica("Casimiro Enterprise", 1000000, 5);
        PessoaJuridica pj2 = new PessoaJuridica("Gaules Enterprise", 1000000, 11);

        System.out.printf("%s%s%.2f%n",pf1.getNome()," deve pagar o valor de: R$",pf1.calcularImposto());
        System.out.printf("%s%s%.2f%n",pf2.getNome()," deve pagar o valor de: R$",pf2.calcularImposto());

        System.out.printf("%s%s%.2f%n",pj1.getNome()," deve pagar o valor de: R$",pj1.calcularImposto());
        System.out.printf("%s%s%.2f%n",pj2.getNome()," deve pagar o valor de: R$",pj2.calcularImposto());
    }
}
