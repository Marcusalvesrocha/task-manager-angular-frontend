import { Component, OnInit } from "@angular/core";

import { Task } from "../tasks/shared/task.model";
import { TaskService } from "../tasks/shared/task.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent{

  public tasks: Task[];

  public constructor(private taskService: TaskService){
  }

  public ngOnInit(){
    this.taskService.getImportant()
      .subscribe(
        tasks => this.tasks = tasks,
        erros => alert("Não foi possível completar a operação, tente mais tarde")
      );
      
  }
}