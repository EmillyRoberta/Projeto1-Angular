import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL_API } from './app.api'
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService{

    constructor(private http:HttpClient){}
 
    public getOfertas():Observable<any>{
       return this.http.get(`${URL_API}?destaque=true`)
        
    }

    public getOfertarPorCategoria(categoria: string):Observable<any>{
        return of(this.http.get(`${URL_API}?categoria=${categoria}`))
    }

    public getOfertasPorId(id:number):Observable<any>{
        return this.http.get(`${URL_API}?id=${id}`)
    }

    public pesquisaOfertas(termo:string): Observable<any>{
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        // .pipe(map((response: any) => response.json()))
    }

}