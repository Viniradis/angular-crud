import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produtos';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${environment.ApiUrl}/Produto`

  constructor(private http: HttpClient) { }

  GetProdutos() : Observable<Response<Produto[]>> {
    return this.http.get<Response<Produto[]>>(this.apiUrl);
  }

  GetProduto(id : number) : Observable<Response<Produto>> {
    return this.http.get<Response<Produto>>(`${this.apiUrl}/${id}`)
  }

  CreateProduto(produto: Produto) : Observable<Response<Produto[]>> {
    return this.http.post<Response<Produto[]>>(`${this.apiUrl}`, produto)
  }

  EditarProduto(produto: Produto) : Observable<Response<Produto[]>> {
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  ExcluirProduto(id: number): Observable<Response<Produto[]>>{
    return this.http.delete<Response<Produto[]>>(`${this.apiUrl}?id=${id}`)
  }
}
