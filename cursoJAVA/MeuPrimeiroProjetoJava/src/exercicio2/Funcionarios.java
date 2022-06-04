package exercicio2;

public class Funcionarios {

    private String nome;

    private int idade;

    private String cargo;

    private String situacao;

    public Funcionarios(String nome, int idade, String cargo, String situacao){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.situacao = situacao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public void demitirFuncionario(){
        if(this.situacao == "Ativo"){
            this.situacao = "Inativo";
            System.out.println("O funcionario "+getNome()+" está "+getSituacao());
        } else {
            System.out.println("Operação inválida.");
        }
    }
    public void trocarCargoFuncionario(){
        if(this.cargo == "DEV Junior"){
            this.cargo = "DEV Pleno";
            System.out.println(getNome()+" foi promovido e agora é "+getCargo());
        } else if(this.cargo == "DEV Pleno"){
            this.cargo = "DEV Senior";
            System.out.println(getNome()+" foi promovido e agora é "+getCargo());
        } else if(this.cargo == "DEV Senior"){
            this.cargo = "Tech Lead";
            System.out.println(getNome()+" foi promovido e agora é "+getCargo());

        } else {
            System.out.println("Operação inválida.");
        }
    }

    public void aniversariar(){
        this.idade += 1;
        System.out.println(getNome()+" fez aniversário a agora tem "+getIdade()+" anos");
    }

    public void pagarSalario(){
        System.out.println("O salario do funcionário "+getNome()+" foi pago.");
    }

    public Object criarFuncionario(String nome, int idade, String cargo, String situacao){
        return new Funcionarios(nome, idade, cargo, situacao);
    }
}
