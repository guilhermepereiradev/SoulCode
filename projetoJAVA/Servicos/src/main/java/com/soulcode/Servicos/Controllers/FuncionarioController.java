package com.soulcode.Servicos.Controllers;

import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("servicos")
public class FuncionarioController {

    @Autowired
    FuncionarioService funcionarioService;

    @GetMapping("/funcionarios")
    public List<Funcionario> mostrarTodosFuncionarios(){
        List<Funcionario> funcionarios = funcionarioService.mostrarTodosFuncionarios();
        return funcionarios;
    }
}
