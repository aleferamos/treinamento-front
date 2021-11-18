import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IPessoaEmail } from "../interface/IPessoaEmail";

@Injectable({
    providedIn: 'root'
})

export class PessoaEmailService { 

    urlBase: string = environment.urlBase;

    constructor(private http: HttpClient){}

    async post(email:IPessoaEmail, clienteId:number):Promise<void>{
        const url = `${this.urlBase}/pessoas/${clienteId}/emails`
        await this.http.post<Promise<IPessoaEmail>>(url, email).toPromise();
    }
}