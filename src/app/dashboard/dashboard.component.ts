import { Component, OnInit } from "@angular/core";

import { Task } from "../tasks/shared/task.model";
import { TaskService } from "../tasks/shared/task.service";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
   // providers:[ TaskService ]
})

export class DashboardComponent implements OnInit{
    public tasks : Task[];

    public constructor(private taskService: TaskService){
        //this.taskService.getTasks().then((tasks) => {console.log(tasks)})
    }

    ngOnInit(): void {
        this.taskService.getImportantTasks()
            .then((tasks) => this.tasks = tasks);
    }
}