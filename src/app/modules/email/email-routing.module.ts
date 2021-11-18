import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailCadastrarComponent } from './email-cadastrar/email-cadastrar.component';

const routes: Routes = [
  {path:'cadastrar', component:EmailCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
