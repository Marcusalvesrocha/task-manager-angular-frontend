import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{

  public tasks: Array<Task>;
  public newTask: Task;

  public constructor(private taskService: TaskService){ 
    this.newTask = new Task(null, '');
  }

  public ngOnInit(){
    this.taskService.getAll()
      .subscribe(
        tasks => this.tasks = tasks.sort((a, b) => b.id - a.id),
        error => alert("Não foi possível completar a operação, tente mais tarde")
      )
  }

  public createTask(){
    this.newTask.title = this.newTask.title.trim();

    if (!this.newTask.title) {
      alert("Digite um título");
    } else {
      this.taskService.create(this.newTask)
      .subscribe(
        task => {
          this.tasks.unshift(task);
          this.newTask = new Task(null, '');
          alert("Tarefa adicionada com sucesso");
        },
        () => alert("Ocorreu um problema, tente mais tarde")
      );
    }
  }

  public deleteTask(task: Task) {
    if(confirm(`Deseja realmente excluir a tarefa "${task.title}"`)){
      this.taskService.delete(task.id)
        .subscribe(
          () => this.tasks = this.tasks.filter(t => t !== task) ,
          () => alert("Ocorreu um problema, tente mais tarde")
        );
    }
  }
}