import java.time.LocalDate;
import java.util.Date;

public class Veiculo {
    private int rodas;
    private double tanque; //capacidade total de combustivel
    private int ano;
    private double consumoCombustivel; //km/l
    private boolean ligado = false;

    public Veiculo(int rodas, double tanque, int ano, double consumoCombustivel) {
        this.rodas = rodas;
        this.tanque = tanque;
        this.ano = ano;
        this.consumoCombustivel = consumoCombustivel;
    }

    public boolean viajar(double dist){
        if(ligado && dist > 0){
            double litrosGastos = dist / consumoCombustivel;
            if(tanque - litrosGastos > 0){
                tanque -= litrosGastos;
                return true;
            }
        }
        return false;
    }
    public void ligar(){
        if(LocalDate.now().getYear() - ano <= 50) {
            ligado = true;
        }
    }

    public void desligar(){
        ligado = false;
    }

    public int getRodas() {
        return rodas;
    }

    public void setRodas(int rodas) {
        this.rodas = rodas;
    }

    public double getTanque() {
        return tanque;
    }

    public void setTanque(double tanque) {
        this.tanque = tanque;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public double getConsumoCombustivel() {
        return consumoCombustivel;
    }

    public void setConsumoCombustivel(double consumoCombustivel) {
        this.consumoCombustivel = consumoCombustivel;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

}
