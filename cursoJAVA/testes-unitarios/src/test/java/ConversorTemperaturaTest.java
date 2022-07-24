import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

//Em uma classe de testes, cada método é um teste diferente
public class ConversorTemperaturaTest {
    private ConversorTemperatura conversor = new ConversorTemperatura();

    @Test
    public void testConverterCParaF(){
        double resultado = conversor.celsiusToFahrenheit(80);
        assertTrue(resultado == 176.0); // se o resultado for true o teste obteve sucesso
    }

    @Test
    public void testeConverterFParaC(){
        double resultado = conversor.fahrenheitToCelsius(176);
        assertEquals(80.0, resultado, 0.0);//resultado esperado, resultado real, tolerancia
    }
}
