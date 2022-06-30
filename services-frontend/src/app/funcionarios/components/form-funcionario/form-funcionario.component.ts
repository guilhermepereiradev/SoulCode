import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

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

  foto!: File;
  fotoPreview: string = '';

  constructor(
    private fb: FormBuilder,
    private funcService: FuncionarioService,
    private dialogRef: MatDialogRef<FormFuncionarioComponent>
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
    const f: Funcionario = this.formFuncionario.value;
    f.foto = '';

    this.funcService.salvarFuncionario(f).subscribe( 
      async func => {
        //apos salvar os dados basicos, vamos salvar a imagem e gerar o link
        const link = await this.funcService.uploadImagem(this.foto);
        func.foto = link;
        this.funcService.autualizarFuncionario(func).subscribe(
          (fun) => {
            this.dialogRef.close();
          }
        )
      }
    )
  }
}
