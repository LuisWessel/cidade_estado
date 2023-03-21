import { SideNavInnerToolbarModule } from './../layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component';
export class Cidade {
  id?: number;
  nome?: string;


  constructor (cidade?: any){
    if (cidade){
      this.id = cidade.id;
      this.nome = cidade.nome;
         }
  }

  getDisplayValue(){
    return this.nome;

  }

}
