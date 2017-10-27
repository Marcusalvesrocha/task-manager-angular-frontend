import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService{
  public createDb(){
    let tasks = [
      {id: 1, title: 'Realizar entregas'},
      {id: 2, title: 'Desenvolver componentes'},
      {id: 3, title: 'Agendar reunião'},
      {id: 4, title: 'Definir novos jobs'},
      {id: 5, title: 'Implementar novo layout'},
      {id: 6, title: 'Integrar novos modulos'},
      {id: 7, title: 'Definir novos modulos'},
    ];

    return { tasks }
  }
}