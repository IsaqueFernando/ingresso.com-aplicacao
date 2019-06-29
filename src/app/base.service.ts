import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class BaseService {

   constructor(private http: HttpClient, public router: Router,
      private subRouter: string = null, private version: string = null) { }

   private getRoute(route: string | any[]): string {
      return 'http://localhost:3000/ingressos';
   }

   private getHttpParams(parameters): HttpParams {
      let params = new HttpParams();

      if (parameters) {
         Object.keys(parameters).forEach(key => {
            if (Array.isArray(parameters[key])) {
               parameters[key].forEach(param => {
                  if (param) {
                     params = params.append(key, param.toString());
                  }
               });
            } else if (parameters[key] != null) {
               params = params.append(key, parameters[key].toString());
            }
         });
      }

      return params;
   }

   protected post<T>(route: string | any[], body: Object = null) {
      // const httpParams = this.getHttpParams(parameters);
      const url = this.getRoute(route);
     
      return <Observable<T>>this.http.post(
         url,
         body
      ).pipe(
         tap(
            () => { }
         ));
   }
}
