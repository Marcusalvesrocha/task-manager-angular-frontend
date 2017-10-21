import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'APP DE TAREFAS';
  
  task: Task = {
    id: 1,
    title: 'Entregar encomendas dos clientes'
  };

  task2: Task = new Task(2, 'Receber novos projetos de desenvolvimento');
}

export class Task{
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title
  }
}

