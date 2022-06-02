public class EstruturaCondicao {
    
    public static void main(String[] args) {

        // condicao if
        
        boolean condicao = false; // default = false

        if(condicao){
            System.out.println("A condição está verdadeira");
        }else{
            System.out.println("A condição está falsa");
        }

        int nota = 8;
        int falta = 5;

        if(nota >= 6 && falta <= 5){
            System.out.println("Aluno Aprovado");
        } else if(nota >= 4){
            System.out.println("Aluno em recuperação");
        } else {
            System.out.println("Aluno Reprovado");
        }

        String resultado = "";
        resultado = (nota >= 6) ? "Aluno Aprovado" : "Aluno Reprovado"; // operador ternario;

        System.out.println(resultado);

        int posicao = 7;

        switch(posicao){
            case 1:
                System.out.println("Você chegou em primeiro lugar");
                break;
            case 2:
                System.out.println("Você chegou em segundo lugar");
                break;
            case 3:
                System.out.println("Você chegou em terceiro lugar");
                break;
            case 4: case 5: case 6:
                System.out.println("Você ganhou um prêmio de participação");
                break;
            default: 
                System.out.println("Você não teve colocação");
        }
    }
}