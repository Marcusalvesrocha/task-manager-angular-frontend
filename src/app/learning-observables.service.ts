import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()

export class LearningObservables {

  private observer;
  private url = 'api/tasssssks';

  public constructor(private http: Http) {
    // CRIANDO OBSERVADOR
    this.observer = {
      next: newData => console.log("CHAMOU O METODO E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
      error: errorData => console.log("CHAMOU O METODO ERRO E PASSOU COMO PARAMENTRO O 'errorData' => ",errorData),
      complete: () => console.log("CHAMOU O METODO COMPLETE E ENCERROU")
    };

    // CRIANDO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
    this.http.get(this.url)
      .subscribe(this.observer);

    // CRIANDO OBSERVADO E CRIANDO UM OBSERVADOR NO PARAMETRO
    this.http.get(this.url)
      .subscribe({
        next: newData => console.log("CHAMOU O METODO2 E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
        error: errorData => console.log("CHAMOU O METODO2 ERRO E PASSOU COMO PARAMENTRO O 'errorData' => ",errorData),
        complete: () => console.log("CHAMOU O METODO2 COMPLETE E ENCERROU")
      });

    // PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO
    this.http.get(this.url)
      .catch( error => this.handleErrorsDeveloper(error))     
      .subscribe(
        newData => console.log("CHAMOU O METODO3 E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
        errorData => this.handleErrorsUser(errorData),
        () => console.log("CHAMOU O METODO3 COMPLETE E ENCERROU")
      );
  }

  public handleErrorsDeveloper(error: Response){
    console.log("SALVANDO ERRO NO BANCO DE DADOS PARA O DESENVOLVEDOR ", error );
    return Observable.throw(error);
  }

  public handleErrorsUser(error: Response){
    alert("Ocorreu um erro no servidor, por favor tente mais tarde.");
  }
}