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

    public void sacar(double valor){
        if(valor <= getSaldo()){
            System.out.println("------"+getTitularConta()+"------");
            setSaldo(getSaldo() - valor);
            System.out.println("Saque efetuado com sucesso;");
            System.out.printf("%s%.2f%n","Seu novo saldo é: ",getSaldo());
        } else if(valor <= (getSaldo()+getLimiteEspecial())){
            System.out.println("------"+getTitularConta()+"------");
            System.out.println("Saldo insuficiente para realizar operação, deseja acessar o cheque especial?");
            setLimiteEspecial(getLimiteEspecial()- (valor - getSaldo()));
            setSaldo(getSaldo()-valor);
            System.out.printf("%s%.2f%n","Saque efetuado com sucesso, seu novo saldo é: ",getSaldo());
            System.out.printf("%s%.2f%n","Seu novo saldo limite é ",getLimiteEspecial());
        }else{
            System.out.println("Saldo insuficiente");
        }
    }

    public void depositar(double valor){
        System.out.println("------"+getTitularConta()+"------");
        setSaldo(getSaldo()+valor);
        if(getSaldo() > 0){
            System.out.printf("%s%.2f%n","Operação efetuada com sucesso, seu novo saldo é: ",getSaldo());
            setLimiteEspecial(500);
            System.out.println("Seu novo limite é "+getLimiteEspecial());
        } else {
            setLimiteEspecial(getLimiteEspecial()+valor);
            System.out.println("Operação efetuada com sucesso seu novo saldo é: "+getSaldo());
            System.out.println("Seu novo limte especial é "+getLimiteEspecial());
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

}
