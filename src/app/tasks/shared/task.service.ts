import { Headers, Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Task } from "./task.model";

@Injectable()

export class TaskService {

  public tasksUrl = "api/tasks";
  public headers = new Headers({'Content-type': 'application/json'});

  public constructor(private http: Http){}

  public getAll(): Observable<Task[]> {

    return this.http.get(this.tasksUrl)
      .catch(this.handleErros)
      .map((response: Response) => response.json() as Task[])
  }

  public getImportant(): Observable<Task[]> {

    return this.getAll()
      .catch(this.handleErros)
      .map(
        tasks => tasks.slice(0,4),
        erro => alert("Não foi possível mostrar as tarefas, tente mais tarde")
      )
    //return Promise.resolve(TASKS.slice(1,4));
  }

  public getById(id: number): Observable<Task>{

    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErros)
      .map((response: Response) => response.json() as Task)
  }

  public create(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);

    return this.http.post(url, body, { headers: this.headers })
      .catch(this.handleErros)
      .map(response => response.json() as Task)
  }

  public update(task: Task): Observable<Task>{
    
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);

    return this.http.put(url, body, { headers: this.headers })
      .catch(this.handleErros)
      .map(() => task)
  }

  public delete(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .catch(this.handleErros)
      .map(() => null)
  }

  public searchByTitle(term: string): Observable<Task[]> {
    let url = `${this.tasksUrl}?title=${term}`;

    return this.http.get(url, { headers: this.headers })
      .catch(this.handleErros)
      .map((response: Response) => response.json() as Task[])
  }

  private handleErros(error: Response){
    console.log("Salvando o erro em um arquivo de log - Detalhe do erro => ", error);
    return Observable.throw(error);
  }
}