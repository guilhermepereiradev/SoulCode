package com.soulcode.Servicos.Controllers;

import com.soulcode.Servicos.Models.Chamado;
import com.soulcode.Servicos.Services.ChamadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("servicos")
public class ChamadoController {

    @Autowired
    ChamadoService chamadoService;

    @GetMapping("/chamados")
    public List<Chamado> mostrarChamados(){
        List<Chamado> chamados = chamadoService.mostrarChamados();
        return chamados;
    }

    @GetMapping("/chamados/{idChamado}")
    public ResponseEntity<Chamado> mostrarChamadoPeloId(@PathVariable Integer idChamado){
        Chamado chamado = chamadoService.mostrarChamadoPeloId(idChamado);
        return ResponseEntity.ok().body(chamado);
    }
}
