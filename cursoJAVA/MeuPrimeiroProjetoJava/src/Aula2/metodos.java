package Aula2;

public class metodos {

    public static void main(String[] args) {
        impressao();
        mensagem("O Cruzeiro é gigante!");
        System.out.println("O dobro número é: "+dobro(6));
        System.out.println(fatorial(6));
    }

    //metodos sem retorno e sem parâmetros;
    public static void impressao(){
        System.out.println("Java is beatiful!");
    }

    //metodo sem retorno mas com parametros
    public static void mensagem(String msg){
        System.out.println(msg);
    }

    //metodo com retorno
    public static int dobro(int num){
        return num*2;
    }

    public static int fatorial(int num){
        int fatorial = 1;
        for(int i = num; i > 0; i--){
            fatorial *= i;
        }
        return fatorial;
    }
}