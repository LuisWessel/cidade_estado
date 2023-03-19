import { Estado } from './../../model/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

//const estado: string [] = ['MG', 'SP', 'GO', 'ESTADOS UNITEDS THE AMERICAN']

@Injectable({
  providedIn: 'root'
})
export class ConsultaEstadoService {

 // getEstado(): string[]{
 //   return estado;
 // }
 private readonly urlApiEstado = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

  constructor(private http: HttpClient) {}

  getEstados(){
    return this.http.get<Estado[]>(this.urlApiEstado)
    .pipe(
      map(
        estadoIBGE => {
          let estadoBr: Estado[] = new Array();
          estadoIBGE.forEach(uf => {
            estadoBr.push(new Estado(uf))});
            return estadoBr;
          })
        )
  }
}
