public class Biblioteca {
    public static void main(String[] args) {
        LivroFisico l1 = new LivroFisico("1984", 2);

        Ebook e1 = new Ebook("Revolução dos Bichos");

        System.out.println(l1.verificarDisponibilidade());
        l1.emprestarLivro();

        System.out.println(l1.verificarDisponibilidade());
        l1.emprestarLivro();

        System.out.println(l1.verificarDisponibilidade());
        l1.emprestarLivro();

        System.out.println(e1.verificarDisponibilidade());
        e1.emprestarLivro();
    }
}
