public class ContaCorrente extends Conta{ //importa a superclass conta

    private final String atendimento = "Sem prioridade"; //final não deixa modificar esse atributo

    public ContaCorrente(String titularConta, String numeroConta, String numeroAgencia, double saldo) {
        super(titularConta, numeroConta, numeroAgencia, saldo);
    }

    @Override
    public void mostrarDados() { //importa o metodo da superclass
        super.mostrarDados();
        System.out.println("Essa conta tem atendimento do tipo: "+getAtendimento());
    }

    public String getAtendimento() {
        return atendimento;
    }

    public void depositar(double valor){
        if (valor > 0){
            setSaldo(getSaldo()+valor);
            System.out.printf("%s%s%.2f%n", getTitularConta(), ", deposito efetuado com sucesso. Seu novo saldo é ",getSaldo());
        }else {
            System.out.printf("%s%s%n",getTitularConta(),", operação inválida.");
        }
    }

    public void sacar(double valor){
        if(getSaldo() < valor){
            System.out.printf("%s%s%n",getTitularConta(),", saldo insuficiente para a operação.");
        }else{
            setSaldo(getSaldo()-valor);
            System.out.printf("%s%s%.2f%n",getTitularConta(),", saque efetuado com sucesso. Seu novo saldo é ",getSaldo());
        }
    }

}
