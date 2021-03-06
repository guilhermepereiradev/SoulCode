import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VericacaoTokenGuard } from '../guards/vericacao-token.guard';
import { CargosComponent } from './components/cargos/cargos.component';
import { IdValidatorGuard } from './guards/id-validator.guard';
import { PodeSairGuard } from './guards/pode-sair.guard';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ListarFuncionariosComponent } from './pages/listar-funcionarios/listar-funcionarios.component';


const routes: Routes = [
  {
    path: '',
    component: ListarFuncionariosComponent,
    children: [
      {
        path: ':idFuncionario',
        component: FuncionarioComponent,
        canDeactivate: [PodeSairGuard],
        canActivate: [IdValidatorGuard, VericacaoTokenGuard]
      },
      {
        path: 'listar/cargos',
        component: CargosComponent
      }
    ],
    canActivate: [VericacaoTokenGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionariosRoutingModule { }
