public class Loop {
    
    public static void main(String[] args) {
        //loop for
        
        for(int i = 1; i <= 10; i++){
            System.out.println(i);
        }
        
        //loop while

        int contador = 11;

        while(contador <= 20){
            System.out.println(contador);
            contador++;
        }

        //loop do while

        contador = 21;

        do {
            System.out.println(contador);
            contador++;
        } while (contador <= 30);
    }
}