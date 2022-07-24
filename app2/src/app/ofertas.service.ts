import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from './app.api'

@Injectable()
export class OfertasService{

    constructor(private http:HttpClient){}
 
    public getOfertas():Observable<any>{
       return this.http.get(`${URL_API}?destaque=true`)
        
    }

    public getOfertarPorCategoria(categoria: string):Observable<any>{
        return this.http.get(`${URL_API}?categoria=${categoria}`)
    }

    public getOfertasPorId(id:number):Observable<any>{
        return this.http.get(`${URL_API}?id=${id}`)
    }

}