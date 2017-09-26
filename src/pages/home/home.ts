import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { TaskService } from './../../providers/task/task.service';
import { Task } from './../../models/task.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tasks: Task[] = [];

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public taskService: TaskService
  ) {}

  ionViewDidLoad(){
    this.taskService.getAll()
    .then((tasks: Task[]) => {      
      this.tasks = tasks;
    });
  }

  private showLoading(message?: string): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: message || 'Aguarde um momento...'
    });
    loading.present();
    return loading;
  }

}
