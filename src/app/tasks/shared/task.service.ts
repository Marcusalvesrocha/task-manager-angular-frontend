import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Task } from "./task.model";

@Injectable()

export class TaskService {

  public tasksUrl = "api/tasks";

  public constructor(private http: Http){}

  public getTasks(): Observable<Task[]> {

    return this.http.get(this.tasksUrl)
      .catch(this.handleErros)
      .map((response: Response) => response.json() as Task[])
  }

  public getImportantTasks(): Observable<Task[]> {

    return this.getTasks()
      .catch(this.handleErros)
      .map(
        tasks => tasks.slice(0,4),
        erro => alert("Não foi possível mostrar as tarefas, tente mais tarde")
      )
    //return Promise.resolve(TASKS.slice(1,4));
  }

  public getTask(id: number): Observable<Task>{

    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErros)
      .map((response: Response) => response.json() as Task)
  }

  private handleErros(error: Response){
    console.log("Salvando o erro em um arquivo de log - Detalhe do erro => ", error);
    return Observable.throw(error);
  }
}