import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cidade } from 'src/app/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCidadeService {

  constructor(private http: HttpClient) { }

  getCidades(uf: string){
    return this.http.get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .pipe(
      map((cidadeIBGE) => {
        let cidadePorEstado: Cidade[] = new Array();
        cidadeIBGE.forEach(uf => {
          cidadePorEstado.push(new Cidade(uf))
        })
        return cidadePorEstado;
      }
      )
    )
  }
}
