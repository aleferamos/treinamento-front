import { Component, OnInit } from '@angular/core';
import { IPessoa } from 'src/app/shared/interface/IPessoa';
import { PessoaService } from 'src/app/shared/service/Pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
   
  }

  
  selectedCity1: any;
  

  pessoa: IPessoa = {} as IPessoa;
  nome!:string;
  data!:string;
  sexo!:string;
  status!: string;
  cpf!:string;
  inscricaoEstadual!:string;
  fisica!:string;

  async salvar(): Promise<void> {
    this.pessoa.nome = this.nome;
    this.pessoa.data_nascimento = this.data;
    this.pessoa.cpf_cnpj = this.cpf;
    this.pessoa.sexo = this.sexo;
    this.pessoa.inscricao_estadual = this.inscricaoEstadual;
    this.pessoa.status = this.status;
    this.pessoa.tipo = this.fisica;

    console.log(this.pessoa);
    
    await this.pessoaService.post(this.pessoa);
  }

}
