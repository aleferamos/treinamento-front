import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { CadastrarComponent } from './modules/pessoa/cadastrar/cadastrar.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule} from '@angular/forms';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { EmailModule } from './modules/email/email.module';
import { EmailCadastrarComponent } from './modules/email/email-cadastrar/email-cadastrar.component';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EmailCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PessoaModule,
    CalendarModule,
    InputTextModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    FormsModule,
    CascadeSelectModule,
    HttpClientModule,
    ButtonModule,
    EmailModule,
    DropdownModule,
    AutoCompleteModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
