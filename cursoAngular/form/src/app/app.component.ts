import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  user: User = {
    aceitaTermosDeCondicao: false,
    email: '',
    genero: '',
    nome: '',
    username: '',
    senha: ''
  }

  salvarUsuario(){
    alert("Usuário salvo com sucesso");
    console.log(this.user)
  }

}
