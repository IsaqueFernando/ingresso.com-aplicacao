import { Component } from '@angular/core';
import { Ingresso } from './ingresso.model';
import { IngressoApiService } from './ingresso.ApiService';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   serverElements = [];
   newData = '';
   newValor = '';
   newTipo = '';
   errorTipo = false;
   errorData = false;
   errorValor = false;

   constructor(
      public ingressoApiService: IngressoApiService,
      public ingresso: Ingresso
    ) {}

   onAddServer() {
      this.checkValues();
      if(!this.errorTipo && !this.errorData && !this.errorValor){
         this.ingresso.Data = this.newData;
         this.ingresso.Valor = Number(this.newValor);
         this.ingresso.Tipo = Number(this.newTipo);
         this.ingressoApiService.AdicionarAvaliacao(this.ingresso);
      }
   }

   checkValues() {
      if(this.newTipo != '1' && this.newTipo != '2'){
         this.newTipo = '';
         this.errorTipo = true;
      } else {
         this.errorTipo = false;
      }

      if(this.newData.length == 10){
         this.errorData = false;
         for(var i = 0; i < 10; i++){
            if(i == 2 || i == 5){
               if(this.newData.charAt(i) != '-')
                  this.errorData = true;
            }
            else{
               if(this.newData.charAt(i) < '0' || this.newData.charAt(i) > '9')
                  this.errorData = true;
               else if(i == 3){
                  if(this.newData.charAt(i) == '1'){
                     if(this.newData.charAt(i+1) > '2')
                        this.errorData = true;
                  }
               }
            }
         }
      } else {
         this.errorData = true;
      }

      if(this.newValor.length == 5){
         for(i = 0; i < 5; i++){
            if(i == 2){
               if(this.newValor.charAt(i) != '.')
                  this.errorValor = true;
            } else {
               if(this.newValor.charAt(i) < '0' || this.newValor.charAt(i) > '9')
                  this.errorValor = true;
            }
         }
      } else {
         this.errorValor = true;
      }
   }
}
