import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { ReadKeyExpr, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SalvandoFuncionarioComponent } from '../../components/salvando-funcionario/salvando-funcionario.component';
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
  foto!: File;
  fotoPreview!: string;
  novoFuncionario!: Funcionario;

  constructor(
    private route: ActivatedRoute, // acessar os parâmetros da rota ativa
    private funcService: FuncionarioService,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
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

  recuperarFoto(event: any): void{
    this.foto = event.target.files[0];
    this.carregarPreview();
  }

  carregarPreview(): void{
    const reader = new FileReader();
    reader.readAsDataURL(this.foto);
    reader.onload = () => {
      this.funcionario.foto = reader.result as string;
    }
  }

  async editarFunc(): Promise<void>{ 
    const matDialogRef = this.matDialog.open(SalvandoFuncionarioComponent);
    const snackBarRef = this.snackBar;
    this.novoFuncionario = this.formNovoFunc.value;
    this.novoFuncionario.id = this.funcionario.id
    if(this.foto != undefined){
         const linkNovaFoto = await this.funcService.uploadImagem(this.foto);
         this.novoFuncionario.foto = linkNovaFoto;
         console.log("foto != null")
    } else {
      this.novoFuncionario.foto = this.funcionario.foto;
      console.log("foto")
    }

    this.funcService.atualizarFuncionario(this.novoFuncionario).subscribe(() => {
      matDialogRef.close();
      snackBarRef.open("Funcionário salvo com sucesso!", "",{duration: 3000})
    })
    
    // this.funcService.salvarFuncionario(this.novoFuncionario, this.foto).subscribe(func => console.log(func))
  }
}
