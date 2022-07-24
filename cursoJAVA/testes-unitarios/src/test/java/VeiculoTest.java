import org.junit.jupiter.api.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.*;

public class VeiculoTest {

    static int totalTests;
    static DateTimeFormatter timeFormatter;


    @BeforeAll // executa antes de todos os testes
    static public void beforeAll(){
        totalTests = 0;
        timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    }

    @AfterAll //executa depois de todos os teste
    static public void afterrAll(){
        System.out.println("Total de tests: "+ totalTests);
    }

    @BeforeEach // executa antes de CADA teste
    public void beforeEach(){
        totalTests++;
        LocalDateTime agora = LocalDateTime.now();
        System.out.println("[START] Teste #"+totalTests+" | "+ agora.format(timeFormatter));
    }

    @AfterEach // executa depois de CADA teste
    public void afterEach(){
        LocalDateTime agora = LocalDateTime.now();
        System.out.println("[END] Test #"+totalTests+" | "+ agora.format(timeFormatter));
    }

    @Test
    public void testVeiculoNãoViajaDesligado(){
        Veiculo v1 = new Veiculo(4, 45.0,1969, 6.0);
        boolean viajou = v1.viajar(1);
        assertFalse(viajou);
    }

    @Test
    public void testVeiculoContaCorretamenteCombustivel(){
        Veiculo v1 = new Veiculo(4, 30.0,2015, 10.0);
        v1.ligar();
        v1.viajar(150);
        assertEquals(15, v1.getTanque(), 0.0);
    }

    @Test
    public void testeVeiculoViajaApenasOPossivel(){
        Veiculo v1 = new Veiculo(4, 30.0,2015, 10.0);
        v1.ligar();
        boolean viajou = v1.viajar(100_000_000);
        assertFalse(viajou);
    }


    @Test
    public void testVeiculoNãoGastaCompustivel(){
        Veiculo v1 = new Veiculo(4, 30.0,2015, 10.0);
        double tanqueAtual = v1.getTanque();
        v1.ligar();
        v1.viajar(100_000_000);
        assertEquals(tanqueAtual, v1.getTanque(), 0.0);
    }

    @Test
    public void testValorViagemPositivo(){
        Veiculo v1 = new Veiculo(4, 30.0,2015, 10.0);
        boolean viajou = v1.viajar(-1);
        assertFalse(viajou);
    }

    @Test
    public void testVeiculoAntigoNaoLiga(){
        Veiculo v1 = new Veiculo(4, 45.0,1969, 6.0);
        v1.ligar();

        assertFalse(v1.isLigado());
    }

    @Test
    public void testVeiculoNovoLiga(){
        Veiculo v1 = new Veiculo(4, 45.0,2015, 6.0);
        v1.ligar();

        assertTrue(v1.isLigado());
    }
}
