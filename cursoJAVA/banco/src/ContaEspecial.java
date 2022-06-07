public class ContaEspecial extends Conta{

    private final String atendimento = "Com prioridade";
    private double limiteEspecial;
    private double saldoLimite;
    public ContaEspecial(String titularConta, String numeroConta, String numeroAgencia, double saldo, double limiteEspecial) {
        super(titularConta, numeroConta, numeroAgencia, saldo);
        this.limiteEspecial = limiteEspecial;
        this.saldoLimite = limiteEspecial;
    }

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.println("Essa conta tem atendimento do tipo: "+getAtendimento());
        System.out.println("O limite do cheque especial é: "+getLimiteEspecial());
    }

    public void sacar(double valor){
        if(valor <= getSaldo()){
            System.out.println("------"+getTitularConta()+"------");
            setSaldo(getSaldo() - valor);
            System.out.println("Saque efetuado com sucesso;");
            System.out.printf("%s%.2f%n","Seu novo saldo é: ",getSaldo());
        } else if(valor <= (getSaldo()+getSaldoLimite())){
            System.out.println("------"+getTitularConta()+"------");
            System.out.println("Saldo insuficiente para realizar operação, deseja acessar o cheque especial?");
            setSaldoLimite(getSaldoLimite()- (valor - getSaldo()));
            setSaldo(getSaldo()-valor);
            System.out.printf("%s%.2f%n","Saque efetuado com sucesso, seu novo saldo é: ",getSaldo());
            System.out.printf("%s%.2f%n","Seu novo saldo limite é ",getSaldoLimite());
        }else{
            System.out.println("Saldo insuficiente");
        }
    }

    public void depositar(double valor){
        System.out.println("------"+getTitularConta()+"------");
        if(getSaldo() > 0){
            setSaldo(getSaldo()+valor);
            System.out.printf("%s%.2f%n","Operação efetuada com sucesso, seu novo saldo é: ",getSaldo());

        } else {
            setSaldo(getSaldo()+valor);
            if (getSaldo() > 0){
                setSaldoLimite(getLimiteEspecial());
            } else {
                setSaldoLimite(getSaldoLimite() + valor);
            }
            System.out.println(getSaldo()+" "+getSaldoLimite()+" "+getLimiteEspecial());
        }
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

    public double getSaldoLimite() {
        return saldoLimite;
    }

    public void setSaldoLimite(double saldoLimite) {
        this.saldoLimite = saldoLimite;
    }
}
