import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { lastValueFrom } from 'rxjs';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { SalvandoFuncionarioComponent } from '../salvando-funcionario/salvando-funcionario.component';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]]
  })

  fotoPerfilPadrao: string = "../../../../assets/blank-profile-picture-973460_1280.webp";

  foto!: File;
  fotoPreview: string = '';

  constructor(
    private fb: FormBuilder,
    private funcService: FuncionarioService,
    private dialogRef: MatDialogRef<FormFuncionarioComponent>,
    private dialogRefSalvando: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  recuperarFoto(event: any): void{
    this.foto = event.target.files[0];
    this.carregarPreview();
  }

  carregarPreview(): void{
    const reader =  new FileReader();
    reader.readAsDataURL(this.foto);
    reader.onload = () => {
      this.fotoPreview = reader.result as string;
    }
  }

  salvar(): void {
    const f: Funcionario = this.formFuncionario.value
    const snackBarRef = this.snackBar;

    // iniciando salvamento do funcionário
    this.funcService.salvarFuncionario(f, this.foto)
    .subscribe((dados) => {
      const matDialogSalvando = this.dialogRefSalvando;
      matDialogSalvando.open(SalvandoFuncionarioComponent);
      // 1° -> Recuperar o observable que me é retornado do primeiro subscribe

      /**
       * a função then() é executada
       * quando a promise consegue te retornar os dados com sucesso
       *
       * nesse caso, o dado que será retorna é um observable com o funcionário
       * que foi salvo no banco de dados
       */
      dados.then((obs$) => {
        // inscrevendo-se no observable que nos retornará o funcionário salvo no banco de dados
        obs$.subscribe(
          (func) => {
            // quando o funcionário for salvo, aparecerá um alert na tela e o dialog será fechado
            matDialogSalvando.closeAll();
            snackBarRef.open("Funcionário salvo com Sucesso!", "",{
              duration: 3000
            })
            this.dialogRef.close()
          }
        )
      })
    })
  }
}
