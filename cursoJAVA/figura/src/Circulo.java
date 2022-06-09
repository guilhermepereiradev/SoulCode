public class Circulo extends Figura{
    private double raio;

    final double pi = 3.14;

    public Circulo(String nome, String cor, double raio) {
        super(nome, cor);
        this.raio = raio;
    }

    @Override
    public double CalcularArea() {
        return getPi()*(Math.pow(getRaio(), 2));
    }
    public double getRaio() {
        return raio;
    }

    public void setRaio(double raio) {
        this.raio = raio;
    }

    public double getPi() {
        return pi;
    }

}
