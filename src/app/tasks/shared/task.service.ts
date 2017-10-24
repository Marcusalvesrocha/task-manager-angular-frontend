import { Injectable } from "@angular/core";
import { HttpModule } from "@angular/http";

import { Task } from "./task.model";

const TASKS: Array<Task> = [
  {id: 1, title: 'Realizar entregas'},
  {id: 2, title: 'Desenvolver componentes'},
  {id: 3, title: 'Agendar reunião'},
  {id: 4, title: 'Definir novos jobs'},
  {id: 5, title: 'Implementar novo layout'},
  {id: 6, title: 'Integrar novos modulos'},
  {id: 7, title: 'Definir novos modulos'},
];

@Injectable()

export class TaskService {

  public getTasks() {
    let promise = new Promise((resolve, reject) => {
      if (TASKS.length > 0) {
        resolve(TASKS);
      }else{
        let error_msg = "Não há tarefas";
        reject(error_msg);
      }
    });
    return promise;
  }
}