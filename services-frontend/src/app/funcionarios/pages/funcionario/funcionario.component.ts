import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {



  funcionario!: Funcionario;
  fotoPadrao: string = "../../../../assets/blank-profile-picture-973460_1280.webp"
  formNovoFunc: FormGroup = this.fb.group({
    nome: [null,[Validators.required]],
    email: [null,[Validators.email]]
  })


  novoFuncionario!: Funcionario;

  constructor(
    private route: ActivatedRoute, // acessar os parâmetros da rota ativa
    private funcService: FuncionarioService,
    private fb: FormBuilder
  ) { }
  


  ngOnInit(): void {
    // let idFuncionario = this.route.snapshot.paramMap.get('idFuncionario');
    let idFuncionario = this.route.paramMap.subscribe(
      (params) => {
        let idFuncionario = parseInt(params.get("idFuncionario") ?? '0');

        this.recuperarFuncionario(idFuncionario);
      })

  }

  recuperarFuncionario(id: number): void{
    this.funcService.getFuncionarioById(id).subscribe(
      func => {
        this.funcionario = func;
        this.formNovoFunc.setValue({
          nome: func.nome,
          email: func.email
          });
      })
  }

  editarFunc(): void{
  }
}
