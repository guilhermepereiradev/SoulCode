import { Component, OnInit } from '@angular/core';
import { FuncionariosModule } from '../../funcionarios.module';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = []

  colunas: Array<string> = ['id', 'email', 'nome', 'actions']
  
  constructor(
    private funcService: FuncionarioService
  ) { }
  
  excluirFuncionario(id: number): void{
    this.funcService.deleteFuncionario(id).subscribe();
  }


  ngOnInit(): void {

    // 1º sucesso -> retorna os dados
    // 2º erro -> ocorre um erro na fonte de dados
    // 3º complete -> a fonte de dados te retorna tudo

    this.funcService.getFuncionarios().subscribe(
      (funcs) => { //sucesso
          this.funcionarios = funcs;
      }, 
      (erro) => { // erro
        console.log(erro);
      }, 
      () => {// complete
        console.log("Dados enviados com sucesso");
      }
    )
  }
  
}
