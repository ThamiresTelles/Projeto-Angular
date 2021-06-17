import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../classes/pessoa';

@Injectable({
  providedIn: 'root'
})
export class NodeThamiresService {

  url = "http://localhost:8080/";
  
  //url = "https://nodethamires.herokuapp.com/";

  constructor(private httpClient: HttpClient) { }

obterTexto(): Observable<string> {
  return this.httpClient.get<string>(this.url);
}

obterTextoJosemires(): Observable<string> {
  return this.httpClient.get<string>(this.url + 'josemires');
}

obterTextoPost(): Observable<string> {
  var pessoa = new Pessoa();
  pessoa.nome = "Josemires";
  pessoa.sobrenome = "da Telles";
  pessoa.idade = 41;
  pessoa.altura = 1.50;
  pessoa.filiacao.mae = "maria";
  pessoa.filiacao.pai = "joao";
  return this.httpClient.post<string>(this.url + 'josemires', pessoa);
}
}
