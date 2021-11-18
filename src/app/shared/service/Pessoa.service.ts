import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IPage } from "../interface/IPage";
import { IPessoa } from "../interface/IPessoa";

@Injectable({
    providedIn: 'root'
})

export class PessoaService {

    urlBase: string = environment.urlBase;

    constructor(private http: HttpClient){
    }

    async post(pessoa:IPessoa):Promise<void> {
        const url = `${this.urlBase}/pessoas`
        await this.http.post<Promise<IPessoa>>(url, pessoa).toPromise();
    }

    async get():Promise<IPage<IPessoa>> {
        const url = `${this.urlBase}/pessoas`;
        return await this.http.get<IPage<IPessoa>>(url).toPromise();
    }
}