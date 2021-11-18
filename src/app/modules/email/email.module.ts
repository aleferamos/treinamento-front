import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';

import { EmailCadastrarComponent } from './email-cadastrar/email-cadastrar.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }
