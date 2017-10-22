import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";

const TASKS: Array<Task> = [
    {id: 1, title: 'Realizar entregas'},
    {id: 2, title: 'Desenvolver componentes'},
    {id: 3, title: 'Agendar reunião'},
    {id: 4, title: 'Definir novos jobs'},
    {id: 5, title: 'Implementar novo layout'},
    {id: 6, title: 'Integrar novos modulos'},
    {id: 7, title: 'Definir novos modulos'},
];

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{

    public tasks;
    public nomePagina;

    public constructor(){
        this.nomePagina = 'Listagem de Tarefas';
    }

    public ngOnInit(){
        this.tasks = TASKS;
    }
}