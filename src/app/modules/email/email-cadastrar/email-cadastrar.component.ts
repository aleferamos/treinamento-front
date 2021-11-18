import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IPessoa } from 'src/app/shared/interface/IPessoa';
import { IPessoaEmail } from 'src/app/shared/interface/IPessoaEmail';
import { PessoaService } from 'src/app/shared/service/Pessoa.service';
import { PessoaEmailService } from 'src/app/shared/service/PessoaEmail.service';

@Component({
  selector: 'app-email-cadastrar',
  providers: [MessageService],
  templateUrl: './email-cadastrar.component.html',
  styleUrls: ['./email-cadastrar.component.scss']
})
export class EmailCadastrarComponent implements OnInit {

  constructor(private pessoaService: PessoaService,
    private pessoaEmailService: PessoaEmailService,
    private mensagemService: MessageService) { }

  ngOnInit(): void {
    this.buscarPessoas();
    
    
  }

  emailSalvar:IPessoaEmail = {} as IPessoaEmail;
  email!:string;
  padrao!:string;
  pessoa:IPessoa[] = []
  pessoaSelecionada:IPessoa = {} as IPessoa;
  pessoasFiltradas!: IPessoa[];

  async buscarPessoas():Promise<void> {
    const pessoaBuscadas = await this.pessoaService.get();
    this.pessoa = pessoaBuscadas.content    
  }

  filtrarPessoas(event: any): void {
    let query = event.query;
    this.pessoasFiltradas = [];
    
    for (const pessoa of this.pessoa) {
      if (pessoa.nome.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        this.pessoasFiltradas.push(pessoa);
      }
    }     
  }

  async salvar():Promise<void>{
    this.emailSalvar.email = this.email;
    this.emailSalvar.padrao = this.padrao;
    this.emailSalvar.pessoa = this.pessoaSelecionada;
    
    
    await this.pessoaEmailService.post(this.emailSalvar, this.pessoaSelecionada.id).then(sucesso => {
      this.mensagemService.add({severity: 'success',
      summary: 'Email',
      detail: "Email salvo com sucesso" });
    }).catch(err => {
      this.mensagemService.add({severity: 'error',
      summary: 'Email',
      detail: "Erro ao salvar o email"});
    }); 
    
    

  }

}
