public class Principal {

    public static void main(String[] args) {

        ContaCorrente cc1 = new ContaCorrente("Guilherme","123456", "123X", 500);
        ContaCorrente cc2 = new ContaCorrente("Tony Stark", "123457","123X", 550);
        ContaEspecial ce1 = new ContaEspecial("Bruce Banner", "1234568", "123X", 1000,500);
        ContaPoupanca cp1 = new ContaPoupanca("Guilherme","123456", "123X", 500);

//        cc1.mostrarDados();
//        cc2.mostrarDados();
//
//        cc1.sacar(600);
//        cc2.sacar(200);
//
//        cc1.depositar(235.76);
//
//        ce1.mostrarDados();
//        ce1.sacar(1200);
//
//        ce1.depositar(400);

        cc1.mostrarDados();
        cc1.sacar(50);
        cc1.depositar(100);

        cp1.mostrarDados();
        cp1.sacar(50);
        cp1.depositar(100);

        ce1.mostrarDados();
        ce1.sacar(1300);
        ce1.depositar(100);

    }
}
