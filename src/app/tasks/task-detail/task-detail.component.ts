import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{

  public task: Task;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.taskService.getById(+params['id']))
      .subscribe(
        task => this.task = task,
        erros => alert("Não foi possível completar a operação, tente mais tarde")
      )
  }

  public goBack() {
    this.location.back();
  }

  public updateTask(){
    if(!this.task.title){
      alert("Digite um título");
    } else {
      this.taskService.update(this.task)
        .subscribe(
          () => alert('Tarefa atualizada com sucesso'),
          () => alert('Ocorreu um erro durante o processo, tente mais tarde')
        );
    }
  }

}