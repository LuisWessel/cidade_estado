import { Estado } from './../../../model/estado';
import { ConsultaEstadoService } from './../../servicos/consulta-estado.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Cidade } from 'src/app/model/cidade';
import { ConsultaCidadeService } from '../../servicos/consulta-cidade.service';

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss'],
  providers: [ConsultaEstadoService]
})
export class CidadeEstadoComponent implements OnInit {
 estados!: DataSource;
 cidades: Array <Cidade> = [];

 private oestado?: Estado ;

//input do estado
 @Input()
get estado (): Estado {
  return this.oestado? this.oestado : new Estado();
}
set estado(value: Estado){
  this.oestado =value;
  this.estadoChange.emit(value);
}


//input da cidade
@Input()
cidade?: Cidade

@Output()
estadoChange: EventEmitter <Estado> = new EventEmitter<Estado>();

constructor (
  private estadoService : ConsultaEstadoService,
  private cidadeService : ConsultaCidadeService
) {}




ngOnInit() {
  this.estadoService.getEstados().subscribe(uf => {
    this.estados = new DataSource({
      store: {
          type: "array",
          key: "id",
          data: uf
        }

    })
  })
}
//recebe as siglas
listaDeCidade(ev: any){
  this.estadoChange.emit(ev.selectedItem);
  const uf = ev.selectedItem.sigla;
    this.cidadeService
  .getCidades (uf)
  .subscribe(resultado => {this.cidades = resultado})
}
}
