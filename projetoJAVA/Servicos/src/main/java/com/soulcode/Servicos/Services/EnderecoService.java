package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Models.Endereco;
import com.soulcode.Servicos.Repositories.ClienteRepository;
import com.soulcode.Servicos.Repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    public List<Endereco> mostrarEnderecos(){
        return enderecoRepository.findAll();
    }

    public Endereco cadastrarEndereco(Endereco endereco, Integer idCliente){
        Optional<Cliente> cliente = clienteRepository.findById(idCliente);
        endereco.setCliente(cliente.get());
        cliente.get().setEndereco(endereco);
        return enderecoRepository.save(endereco);
    }

    public Endereco mostrarEnderecoPeloId(Integer idEndereco){
        Optional<Endereco> endereco = enderecoRepository.findById(idEndereco);
        return  endereco.orElseThrow();
    }

    public Endereco mostrarEnderecoPeloCliente(Integer idCliente){
        Optional<Cliente> cliente = clienteRepository.findById(idCliente);
        Endereco endereco = cliente.get().getEndereco();
        return endereco;
    }

    public Endereco atualiazarEndereco(Integer idCliente, Endereco endereco){
       Optional<Cliente> cliente = clienteRepository.findById(idCliente);
       Endereco enderecoAntigo = cliente.get().getEndereco();

       endereco.setCliente(cliente.get());
       endereco.setIdEndereco(enderecoAntigo.getIdEndereco());

       cliente.get().setEndereco(endereco);
       return enderecoRepository.save(endereco);
    }

    public void excluirEnderecoPeloCliente(Integer idCliente){
        Optional<Cliente> cliente = clienteRepository.findById(idCliente);
        int IdEndereco = cliente.get().getEndereco().getIdEndereco();
        cliente.get().getEndereco().setCliente(null);
        cliente.get().setEndereco(null);
        enderecoRepository.deleteById(IdEndereco);
    }

    public void excluirEndereco(Integer idEndereco){
        enderecoRepository.deleteById(idEndereco);
    }
}
