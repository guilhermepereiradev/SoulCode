package com.soulcode.Servicos.Repositories;

import com.soulcode.Servicos.Models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
}
