public class Principal {

    public static void main(String[] args) {

        ContaCorrente c1 = new ContaCorrente("Guilherme","123456", "123X", 500);
        ContaCorrente c2 = new ContaCorrente("Tony Stark", "123457","123X", 550);
        ContaEspecial ce1 = new ContaEspecial("Bruce Banner", "1234568", "123X", 1921.61,1000);

        c1.mostrarDados();
        c2.mostrarDados();

        c1.sacar(600);
        c2.sacar(200);

        c1.depositar(235.76);

        ce1.mostrarDados();
        ce1.sacar(2500);
    }
}
