public class Financiamento {

    // regra 1: o valor da entrada >= 20% do valor total
    //       2: o numero de parcelas deve ser de no minimo 6

    private double valorTotal;
    private double entrada;
    private int parcelas;

    public Financiamento(double valorTotal, double entrada, int parcelas) {
        this.valorTotal = valorTotal;
        this.entrada = entrada;
        this.parcelas = parcelas;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public double getEntrada() {
        return entrada;
    }

    public void setEntrada(double entrada) {
        this.entrada = entrada;
    }

    public int getParcelas() {
        return parcelas;
    }

    public void setParcelas(int parcelas) {
        this.parcelas = parcelas;
    }
}
