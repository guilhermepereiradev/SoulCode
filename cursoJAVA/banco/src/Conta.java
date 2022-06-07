public abstract class Conta { //abstract proibi instanciar um objeto do tipo conta

    private String titularConta;
    private String numeroConta;
    private String numeroAgencia;
    private double saldo;

    public Conta(String titularConta, String numeroConta, String numeroAgencia, double saldo){
        this.titularConta = titularConta;
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.saldo = saldo;
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

    public void mostrarDados(){
        System.out.println("___________________________________");
        System.out.println("O titular da conta é: "+getTitularConta());
        System.out.println("O numero da conta é: "+getNumeroConta());
        System.out.println("A agencia da conta é: "+getNumeroAgencia());
        System.out.println("O saldo da conta é: "+getSaldo());
    }

    public String getTitularConta() {
        return titularConta;
    }

    public void setTitularConta(String titularConta) {
        this.titularConta = titularConta;
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        this.numeroConta = numeroConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getNumeroAgencia() {
        return numeroAgencia;
    }

    public void setNumeroAgencia(String numeroAgencia) {
        this.numeroAgencia = numeroAgencia;
    }
}
