export class Cidade {
  id?: number;
  nome?: string;

  construtor (cidade?: any){
    if (cidade){
      this.id = cidade.id;
      this.nome = cidade.nome;
    }
  }
}
