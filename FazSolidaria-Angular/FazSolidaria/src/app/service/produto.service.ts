import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarProdutosCadastrados(): Observable<Produto[]>{
  return this.http.get<Produto[]>(`${environment.url}/produtos`) 
  }


  buscarPeloIdProduto(id:number): Observable<Produto>{
  return this.http.get<Produto>(`${environment.url}/produtos/buscar-id-produto/${id}`)
  }

  buscarPeloNomeProduto(nome: String): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${environment.url}/produtos/nome/${nome}`
    );
  }

  cadastrarProduto(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(`${environment.url}/produtos/cadastrar-produto`, produto, {headers: new HttpHeaders().set('Authorization', environment.token)
  });
  }

  atualizarCadastroProduto(produto:Produto): Observable<Produto>{
    return this.http.put<Produto>(`${environment.url}/produtos/atualizar-produto`, produto, {headers: new HttpHeaders().set('Authorization', environment.token)
  });
  }

  deletarProduto(id:number){
    return this.http.delete(`${environment.url}/produtos/deletar-id-produto/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)
  });
  }
}
