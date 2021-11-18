import { IPessoa } from "./IPessoa";

export interface IPessoaEmail {
    email:string;
    padrao:string;
    pessoa:IPessoa;
}