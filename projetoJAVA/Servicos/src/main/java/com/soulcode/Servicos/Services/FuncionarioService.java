package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

// quando se fala em serviços, estamos falando dos metodos do CRUD da tabela
@Service
public class FuncionarioService {
    //aqui se faz a injeção de dependencia
    @Autowired
    FuncionarioRepository funcionarioRepository;

    // primeiro serviço na tabela de funcionarios vai ser a leitura de todos os funcionarios cadastrados
    //findAll -> metodo do spring Data JPA -> busca todos os registros de uma tabela

    public List<Funcionario> mostrarTodosFuncionarios(){
        return funcionarioRepository.findAll();
    }

    //vamos criar mais um serviço relacionado ao funcionário
    //vamos criar um serviço de buscar o funcionario pelo seu id(chave primaria)

    public Funcionario mostrarUmFuncionarioPeloId(Integer idFuncionario){
        Optional<Funcionario> funcionario = funcionarioRepository.findById(idFuncionario);
        return funcionario.orElseThrow();
    }

//    Vamos criar mais um serviço para buscar um funcionario pelo seu email
    public Funcionario mostrarUmFuncioanarioPeloEmail(String email){
        Optional<Funcionario> funcionario = funcionarioRepository.findByEmail(email);
        return funcionario.orElseThrow();
    }

//  Vamos criar um serviço para cadastrar um novo funcionario
    public Funcionario cadatrarFuncionario(Funcionario funcionario){
//  So por preocação nos vamos colocar o id do funcinario como null
        funcionario.setIdFuncionario(null);
        return funcionarioRepository.save(funcionario);
    }

    public void excluirFuncionario(Integer idFuncionario){
        funcionarioRepository.deleteById(idFuncionario);
    }

    public Funcionario editarFuncionario(Funcionario funcionario){
        return funcionarioRepository.save(funcionario);
    }

    public Funcionario salvarFoto(Integer idFuncionario, String caminhoFoto){
        Funcionario funcionario = mostrarUmFuncionarioPeloId(idFuncionario);
        funcionario.setFoto(caminhoFoto);
        return funcionarioRepository.save(funcionario);
    }
}
