import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskService } from './../../providers/task/task.service';
import { Task } from './../../models/task.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tasks: Task[] = [];

  constructor(
    public navCtrl: NavController,
    public taskService: TaskService
  ) {}

  ionViewDidLoad(){
    this.taskService.getAll()
    .then((tasks: Task[]) => {      
      this.tasks = tasks;
    });
  }

}
