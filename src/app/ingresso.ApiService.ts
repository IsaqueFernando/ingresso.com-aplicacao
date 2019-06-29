import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { Ingresso } from './ingresso.model';

@Injectable()
export class IngressoApiService extends BaseService {

   constructor(
      httpClient: HttpClient,
      router: Router
   ) {
      super(
         httpClient,
         router
      );
   }

   AdicionarAvaliacao(ingresso: Ingresso) {
      return this.post<Ingresso>(['ingressos'],
         this.mapearRequisicao(ingresso)).subscribe();
   }

   mapearRequisicao(requisicao: Ingresso) {
      return {
         tipo: requisicao.Tipo,
         preco: requisicao.Valor,
         data: requisicao.Data,
         id_sala: 1,
         id_filme: 1,
         id_compra: 1,
         id_horario: 1,
         id_assento: 1
      };
   }
}
