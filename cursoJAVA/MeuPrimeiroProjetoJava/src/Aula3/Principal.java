package Aula3;

public class Principal {

    public static void main(String[] args) {
        Animal a1 = new Animal("Hanny", "cachorro", 3);
        Animal a2 = new Animal("Belinha", "gato", 3);

        System.out.println("O nome do animal a1 é "+a1.getNome()+".");
        System.out.println("O nome do animal a2 é "+a2.getNome()+".");

        a2.setNome("Otto");
        a1.setIdade(-1);

        System.out.println("O nome do animal a2 é "+a2.getNome()+"."); //acessar sempre pelo metodo
        System.out.println("A idade do animal a1 é "+a1.getIdade());
        a1.vacinar();
        a2.vacinar();
    }
}
