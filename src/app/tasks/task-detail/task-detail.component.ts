import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
    selector:'task-detail',
    templateUrl:'./task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
   // @Input()
    public task: Task;
    
    public constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ){ }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => 
           // .subscribe((params: Params) => {
                this.taskService.getTask(+params['id'])
             //       .then(task => this.task = task);
        )
        .subscribe(task => this.task = task);
    }

    public goBack(){
        this.location.back();
    }
}