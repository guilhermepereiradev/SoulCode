import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormFuncionarioComponent } from '../../components/form-funcionario/form-funcionario.component';
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

  colunas: Array<string> = ['id', 'nome', 'email', 'actions']
  
  constructor(
    private funcService: FuncionarioService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    // 1º sucesso -> retorna os dados
    // 2º erro -> ocorre um erro na fonte de dados
    // 3º complete -> a fonte de dados te retorna tudo

    this.recuperarFuncionarios();
  }

  excluirFuncionario(id: number, name: string): void{
    const deletar = confirm(`Você realmente deseja excluir o funcionário ${name}?`);
    
    if (deletar){
      this.funcService.deleteFuncionario(id).subscribe(
          () => {
            alert(`O funcionário ${name} foi deletado.`);
            this.recuperarFuncionarios();
          },
        (error) => {
          alert("Não foi possivél deltar esse funcionário.")
          console.log(error);
        }
      )
    }

  }

  recuperarFuncionarios(): void{
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

  abrirFormFuncionario(): void {
    this.dialog.open(FormFuncionarioComponent)
  }
}