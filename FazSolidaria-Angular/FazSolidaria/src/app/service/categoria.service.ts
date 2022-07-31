import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarCategoriasCadastradas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.url}/categorias`)
  }

  buscarIdCategoria(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`${environment.url}/categorias/buscar-id-categoria/${id}`)
  }

  cadastrarCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(`${environment.url}/categorias/cadastrar-categoria`, categoria, {
      headers: new HttpHeaders().set('Authorization', environment.token),
    });
  }

  atualizarCadastroCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${environment.url}/categorias/atualizar-categoria`,categoria,{
      headers: new HttpHeaders().set('Authorization', environment.token),
    });
  }

  deletarCategoria(id:number){
    return this.http.delete(`${environment.url}/categorias/deletar-id-categoria/${id}`, {
      headers: new HttpHeaders().set('Authorization', environment.token),
    });
  }

}
