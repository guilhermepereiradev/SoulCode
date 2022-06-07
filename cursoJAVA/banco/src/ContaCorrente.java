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

}
