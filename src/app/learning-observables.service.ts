import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()

export class LearningObservables {

  private observer;
  private url = 'api/tasks';

  public constructor(private http: Http) {
    // CRIANDO OBSERVADOR
    this.observer = {
      next: newData => console.log("CHAMOU O METODO E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
      error: errorData => console.log("CHAMOU O METODO ERRO E PASSOU COMO PARAMENTRO O 'errorData' => ",errorData),
      complete: () => console.log(`CHAMOU O METODO COMPLETE E ENCERROU`)
    };

    // CRIANDO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
    this.http.get(this.url)
      .subscribe(this.observer);

    // CRIANDO OBSERVADO E CRIANDO UM OBSERVADOR NO PARAMETRO
    this.http.get(this.url)
      .subscribe({
        next: newData => console.log("CHAMOU O METODO2 E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
        error: errorData => console.log("CHAMOU O METODO2 ERRO E PASSOU COMO PARAMENTRO O 'errorData' => ",errorData),
        complete: () => console.log(`CHAMOU O METODO2 COMPLETE E ENCERROU`)
      });

    // PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO
    this.http.get(this.url)
      .subscribe(
        newData => console.log("CHAMOU O METODO3 E PASSOU COMO PARAMENTRO O 'newData' => ",newData),
        errorData => console.log("CHAMOU O METODO3 ERRO E PASSOU COMO PARAMENTRO O 'errorData' => ",errorData),
        () => console.log(`CHAMOU O METODO3 COMPLETE E ENCERROU`)
      );
  }

  public showNameAndEmail(){
    console.log(this.observer.getNameAndEmail());
  }
}