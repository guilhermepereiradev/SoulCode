import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  //controlNome: FormControl = new FormControl('');

  // formUsuario: FormGroup = new FormGroup({
  //   nome: new FormControl("",[Validators.required]),
  //   username: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   senha: new FormControl("", [Validators.required, Validators.minLength(8)]),
  //   genero: new FormControl("", [Validators.required]),
  //   termos: new FormControl(false, [Validators.requiredTrue]),
  //   new FormArray
  // });

  // O required true é utilizado para validar se o campo está marcado ou não

  

  formUsuario: FormGroup = this.fb.group({
    nome: ['', [Validators.required]], // [] => this.fb.control
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(8)]],
    genero: ['', [Validators.required]],
    termos: [false, [Validators.requiredTrue]],
    telefones: this.fb.array([
      ['',[Validators.required]]
])
  })

  tels: FormArray = this.formUsuario.get('telefones') as FormArray;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  enviar(): void{
    console.log(this.formUsuario.value); // retorna os valores digitados nos campos
    console.log(this.formUsuario.controls);// retorna todos os dados dos campos
    this.formUsuario.reset()
  }

  adicionarCampoTelefone(): void {
    if(this.tels.controls.length < 3){
    this.tels.controls.push(this.fb.control('',[Validators.required]));
    }
  }

}
