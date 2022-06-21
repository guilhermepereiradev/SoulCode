package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
