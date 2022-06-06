public class ContaEspecial extends Conta{

    private final String atendimento = "Com prioridade";
    private double limiteEspecial;
    public ContaEspecial(String titularConta, String numeroConta, String numeroAgencia, double saldo, double limiteEspecial) {
        super(titularConta, numeroConta, numeroAgencia, saldo);
        this.limiteEspecial = limiteEspecial;
    }

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.println("Essa conta tem atendimento do tipo: "+getAtendimento());
        System.out.println("O limite do cheque especial é: "+getLimiteEspecial());
    }

    public String getAtendimento() {
        return atendimento;
    }

    public double getLimiteEspecial() {
        return limiteEspecial;
    }

    public void setLimiteEspecial(double limiteEspecial) {
        this.limiteEspecial = limiteEspecial;
    }
}
