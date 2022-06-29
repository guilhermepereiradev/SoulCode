package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Chamado;
import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Repositories.ChamadoRepository;
import com.soulcode.Servicos.Repositories.ClienteRepository;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    ChamadoRepository chamadoRepository;
    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    FuncionarioRepository funcionarioRepository;

    public List<Chamado> mostrarChamados(){
        return chamadoRepository.findAll();
    }

    public Chamado mostrarChamadoPeloId(Integer idChamdo){
        Optional<Chamado> chamados = chamadoRepository.findById(idChamdo);
        return chamados.orElseThrow();
    }

    public List<Chamado> buscarChamadosPeloCliente(Integer idCliente){
        Optional<Cliente> cliente = clienteRepository.findById(idCliente);
        return chamadoRepository.findByCliente(cliente);
    }

    public List<Chamado> buscarChamadoPeloFuncionario(Integer idFuncionario){
        Optional<Funcionario> funcionario = funcionarioRepository.findById(idFuncionario);
        return chamadoRepository.findByFuncionario(funcionario);
    }

    public List<Chamado> buscarChamadoPeloStatus(String status){
        return chamadoRepository.findByStatus(status);
    }

    public List<Chamado> buscarChamadoPorIntervaloData(Date date1, Date date2){
        return chamadoRepository.findByIntervaloData(date1, date2);
    }
}
