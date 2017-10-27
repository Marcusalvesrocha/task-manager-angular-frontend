import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Task } from "./task.model";

@Injectable()

export class TaskService {

  public tasksUrl = "api/tasks";

  public constructor(private http: Http){}

  public getTasks(): Observable<Task[]> {

    return this.http.get(this.tasksUrl)
      .map((response: Response) => response.json() as Task[])
  }

  public getImportantTasks(): Observable<Task[]> {

    return this.getTasks()
      .map(
        tasks => tasks.slice(0,4),
        erro => alert("Não foi possível mostrar as tarefas, tente mais tarde")
      )
    //return Promise.resolve(TASKS.slice(1,4));
  }

  public getTask(id: number): Observable<Task>{

    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .map((response: Response) => response.json() as Task)
  }
}