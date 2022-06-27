package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Chamado;
import com.soulcode.Servicos.Repositories.ChamadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    ChamadoRepository chamadoRepository;

    public List<Chamado> mostrarChamados(){
        return chamadoRepository.findAll();
    }

    public Chamado mostrarChamadoPeloId(Integer idChamdo){
        Optional<Chamado> chamado = chamadoRepository.findById(idChamdo);
        return chamado.orElseThrow();
    }
}
