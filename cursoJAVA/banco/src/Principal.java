public class Principal {

    public static void main(String[] args) {
        Conta c1 = new Conta("Guilherme","123456", "123X", 500);
        Conta c2 = new Conta("Tony Stark", "123457","123X", 550);

        c1.mostrarDados();
        c2.mostrarDados();
    }
}
